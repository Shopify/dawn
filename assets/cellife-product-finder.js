/* Presentation only: three single-choice fields, kept in memory and never submitted. */
if (!customElements.get('cellife-product-finder')) {
  customElements.define('cellife-product-finder', class extends HTMLElement {
    async connectedCallback() {
      if (this.controller) return;
      const controller = this.controller = new AbortController();
      this.stage = this.querySelector('[data-finder-stage]');
      this.answers = {};
      this.step = 0;
      this.showingResult = false;
      try {
        this.config = JSON.parse(this.querySelector('[data-finder-config]').textContent);
        if (this.config.mode !== 'draft') return; // Liquid also holds published themes.
        const [engine,{catalog}] = await Promise.all([import(this.config.engineUrl),import(this.config.dataUrl)]);
        if (this.controller !== controller || controller.signal.aborted) return;
        this.engine = engine;
        this.catalog = catalog;
        const options = {signal:controller.signal};
        this.addEventListener('click',event=>{
          const action = event.target.closest('[data-finder-action]')?.dataset.finderAction;
          if (action === 'restart') this.restart();
          if (action === 'back') this.showQuestion(this.showingResult ? this.step : Math.max(0,this.step-1));
        },options);
        this.addEventListener('change',event=>this.choose(event),options);
        this.addEventListener('submit',event=>{if(event.target.matches('[data-finder-question-form]')){event.preventDefault();this.advance();}},options);
        window.addEventListener('pagehide',()=>this.clear(),options);
        window.addEventListener('pageshow',event=>{if(event.persisted)this.restart();},options);
        this.restart(false);
      } catch {
        this.stage.replaceChildren(this.node('p','The product finder could not load. Please try again later.'));
      }
    }
    disconnectedCallback() { this.clear();this.controller?.abort();this.controller=null; }
    clear() {
      this.answers={};this.step=0;this.showingResult=false;
      this.stage?.replaceChildren();
    }
    restart(focus=true) {
      this.clear();
      const initial=this.engine.evaluate({},this.catalog,this.config.mode);
      if(initial.status==='DATA_HOLD')this.showResult(initial);
      else this.showQuestion(0,focus);
    }
    node(tag,text,className) {
      const element=document.createElement(tag);
      if(text!==undefined&&text!==null)element.textContent=text;
      if(className)element.className=className;
      return element;
    }
    button(label,action,secondary=false) {
      const button=this.node('button',label,secondary?'cellife-finder__secondary':'');
      button.type='button';button.dataset.finderAction=action;return button;
    }
    question() {
      const q=this.catalog.questions;
      if(this.step===0)return q.category;
      if(this.step===1)return {...q.interest,options:q.interest.branches[this.answers.category]};
      return {...q.preference,...q.preference.branches[`${this.answers.category}/${this.answers.interest}`]};
    }
    showQuestion(step,focus=true) {
      this.step=step;this.showingResult=false;
      const q=this.question(),form=this.node('form',null,'cellife-finder__panel');form.noValidate=true;form.dataset.finderQuestionForm='';
      const progress=this.node('p',`Step ${step+1}${step===0?' · 2–3 quick questions':''}`,'cellife-finder__progress');progress.setAttribute('role','status');
      const fieldset=this.node('fieldset'),legend=this.node('legend',q.label);legend.tabIndex=-1;
      const choices=this.node('div',null,'cellife-finder__options');
      if(step===0)choices.classList.add('cellife-finder__options--categories');
      for(const option of q.options){
        const custom=step===0?this.config.categories?.[option.value]:null;
        const label=this.node('label',null,'cellife-finder__option'),input=document.createElement('input');
        input.type='radio';input.name='finder-choice';input.value=option.value;input.checked=this.answers[q.key]===option.value;
        const copy=this.node('span',null,'cellife-finder__choice-copy');
        copy.append(this.node('span',custom?.label||option.label,'cellife-finder__choice-title'));
        const subtitle=custom?.subtitle||option.subtitle;
        if(subtitle)copy.append(this.node('span',subtitle,'cellife-finder__choice-subtitle'));
        label.append(input,copy);choices.append(label);
      }
      const error=this.node('p','','cellife-finder__error');error.dataset.finderError='';error.id=`FinderError-${this.dataset.instance}-${step}`;error.setAttribute('role','alert');fieldset.setAttribute('aria-describedby',error.id);
      fieldset.append(legend,choices);
      const actions=this.node('div',null,'cellife-finder__actions');
      if(step>0)actions.append(this.button('Back','back',true));
      const next=this.node('button',step===2?'Submit':'Continue');next.type='submit';next.dataset.finderNext='';actions.append(next);
      if(step>0)actions.append(this.button('Restart','restart',true));
      form.append(progress,fieldset,error,actions);this.stage.replaceChildren(form);
      this.updateNextLabel();if(focus)legend.focus({preventScroll:true});
    }
    choose(event) {
      if(this.showingResult||!(event.target instanceof HTMLInputElement)||event.target.name!=='finder-choice')return;
      const key=this.question().key,value=event.target.value;
      if(this.answers[key]!==value){
        if(key==='category'){delete this.answers.interest;delete this.answers.preference;}
        if(key==='interest')delete this.answers.preference;
      }
      this.answers[key]=value;
      this.querySelector('[data-finder-error]').textContent='';this.updateNextLabel();
    }
    updateNextLabel() {
      const preference=this.catalog.questions.preference.branches[`${this.answers.category}/${this.answers.interest}`];
      this.querySelector('[data-finder-next]').textContent=this.step===0||(this.step===1&&preference)?'Continue':'Submit';
    }
    advance() {
      if(this.answers[this.question().key]===undefined){this.querySelector('[data-finder-error]').textContent='Choose one option to continue.';return;}
      const result=this.engine.evaluate(this.answers,this.catalog,this.config.mode);
      if(result.status==='INCOMPLETE')return this.showQuestion(Number(result.nextQuestion.slice(1))-1);
      if(result.status==='DISCOVERY_MATCH'){
        if(this.step===0)return this.showQuestion(1);
        if(this.step===1&&this.catalog.questions.preference.branches[`${this.answers.category}/${this.answers.interest}`])return this.showQuestion(2);
      }
      this.showResult(result);
    }
    showResult(engineResult) {
      this.showingResult=true;
      const {result,destination}=this.engine.connectDestination(engineResult,this.config.mappings,location.origin);
      const panel=this.node('div',null,'cellife-finder__panel');
      const match=result.status==='DISCOVERY_MATCH',product=match?this.config.mappings[result.productIds[0]]:null;
      const heading=this.node('h3',match?'Recommended Product':'Product information unavailable','cellife-finder__result-title');heading.tabIndex=-1;panel.append(heading);
      if(match){
        const id=result.productIds[0],rationale=this.catalog.rationales[result.rationaleId],payload=this.catalog.warnings[id];
        panel.append(this.node('p',result.scope,'cellife-finder__result-scope'));
        const card=this.node('div',null,'cellife-finder__product');
        if(product.image){const image=document.createElement('img');image.src=product.image;image.alt='';image.width=120;image.height=160;card.append(image);}
        const explanation=this.node('div');explanation.append(this.node('h4',product.title,'cellife-finder__product-title'),this.node('p',`${product.priceVaries?'From ':''}${product.price}`,'cellife-finder__price'),this.node('p',`You selected ${rationale.interest}.`));card.append(explanation);panel.append(card);
        const precautions=this.node('section',null,'cellife-finder__precautions');precautions.setAttribute('aria-label','Before you consider this product');
        precautions.append(this.node('h4','Before you consider this product'));
        const warnings=this.node('ul');for(const warning of payload.warnings)warnings.append(this.node('li',warning));precautions.append(warnings);
        if(payload.ingredientNotes.length)precautions.append(this.node('p',payload.ingredientNotes.join(' ')));
        precautions.append(this.node('p',this.catalog.guidance.general,'cellife-finder__general-guidance'));
        const purchase=this.querySelector(`template[data-finder-purchase="${id}"]`);
        const commerce=this.node('div',null,'cellife-finder__commerce');
        if(purchase)commerce.append(purchase.content.cloneNode(true));
        if(!purchase?.content.querySelector('a')){const link=this.node('a','View product details','cellife-finder__product-link cellife-finder__secondary');link.href=destination;commerce.append(link);}
        panel.append(commerce,precautions);
      }else{
        panel.append(this.node('p','We couldn’t load this product’s information. Please contact Cellife for help.'));
      }
      const actions=this.node('div',null,'cellife-finder__actions');
      if(this.answers.category)actions.append(this.button('Back','back',true));actions.append(this.button('Restart','restart',true));panel.append(actions);
      this.stage.replaceChildren(panel);heading.focus({preventScroll:true});
    }
  });
}
