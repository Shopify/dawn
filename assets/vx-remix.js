import{A as oo,h as Gi,y as lo,u as Bt,D as Fh}from"./vx-hooks.module.js";import{P as Ih,O as Uh,C as Nh,T as Oh,R as kh}from"./vx-index.js";import"./vx-compat.module.js";function zh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ar={exports:{}},ho;function Hh(){return ho||(ho=1,function(r){function t(){var e=0,i=1,s=2,a=3,o=4,l=5,h=6,u=7,c=8,f=9,p=10,m=11,g=12,_=13,x=14,d=15,T=16,A=17,y=0,D=1,b=2,w=3,F=4;function S(n,N){return 55296<=n.charCodeAt(N)&&n.charCodeAt(N)<=56319&&56320<=n.charCodeAt(N+1)&&n.charCodeAt(N+1)<=57343}function M(n,N){N===void 0&&(N=0);var G=n.charCodeAt(N);if(55296<=G&&G<=56319&&N<n.length-1){var k=G,W=n.charCodeAt(N+1);return 56320<=W&&W<=57343?(k-55296)*1024+(W-56320)+65536:k}if(56320<=G&&G<=57343&&N>=1){var k=n.charCodeAt(N-1),W=G;return 55296<=k&&k<=56319?(k-55296)*1024+(W-56320)+65536:W}return G}function B(n,N,G){var k=[n].concat(N).concat([G]),W=k[k.length-2],O=G,tt=k.lastIndexOf(x);if(tt>1&&k.slice(1,tt).every(function(Mt){return Mt==a})&&[a,_,A].indexOf(n)==-1)return b;var rt=k.lastIndexOf(o);if(rt>0&&k.slice(1,rt).every(function(Mt){return Mt==o})&&[g,o].indexOf(W)==-1)return k.filter(function(Mt){return Mt==o}).length%2==1?w:F;if(W==e&&O==i)return y;if(W==s||W==e||W==i)return O==x&&N.every(function(Mt){return Mt==a})?b:D;if(O==s||O==e||O==i)return D;if(W==h&&(O==h||O==u||O==f||O==p))return y;if((W==f||W==u)&&(O==u||O==c))return y;if((W==p||W==c)&&O==c)return y;if(O==a||O==d)return y;if(O==l)return y;if(W==g)return y;var mt=k.indexOf(a)!=-1?k.lastIndexOf(a)-1:k.length-2;return[_,A].indexOf(k[mt])!=-1&&k.slice(mt+1,-1).every(function(Mt){return Mt==a})&&O==x||W==d&&[T,A].indexOf(O)!=-1?y:N.indexOf(o)!=-1?b:W==o&&O==o?y:D}this.nextBreak=function(n,N){if(N===void 0&&(N=0),N<0)return 0;if(N>=n.length-1)return n.length;for(var G=Y(M(n,N)),k=[],W=N+1;W<n.length;W++)if(!S(n,W-1)){var O=Y(M(n,W));if(B(G,k,O))return W;k.push(O)}return n.length},this.splitGraphemes=function(n){for(var N=[],G=0,k;(k=this.nextBreak(n,G))<n.length;)N.push(n.slice(G,k)),G=k;return G<n.length&&N.push(n.slice(G)),N},this.iterateGraphemes=function(n){var N=0,G={next:(function(){var k,W;return(W=this.nextBreak(n,N))<n.length?(k=n.slice(N,W),N=W,{value:k,done:!1}):N<n.length?(k=n.slice(N),N=n.length,{value:k,done:!1}):{value:void 0,done:!0}}).bind(this)};return typeof Symbol<"u"&&Symbol.iterator&&(G[Symbol.iterator]=function(){return G}),G},this.countGraphemes=function(n){for(var N=0,G=0,k;(k=this.nextBreak(n,G))<n.length;)G=k,N++;return G<n.length&&N++,N};function Y(n){return 1536<=n&&n<=1541||n==1757||n==1807||n==2274||n==3406||n==69821||70082<=n&&n<=70083||n==72250||72326<=n&&n<=72329||n==73030?g:n==13?e:n==10?i:0<=n&&n<=9||11<=n&&n<=12||14<=n&&n<=31||127<=n&&n<=159||n==173||n==1564||n==6158||n==8203||8206<=n&&n<=8207||n==8232||n==8233||8234<=n&&n<=8238||8288<=n&&n<=8292||n==8293||8294<=n&&n<=8303||55296<=n&&n<=57343||n==65279||65520<=n&&n<=65528||65529<=n&&n<=65531||113824<=n&&n<=113827||119155<=n&&n<=119162||n==917504||n==917505||917506<=n&&n<=917535||917632<=n&&n<=917759||918e3<=n&&n<=921599?s:768<=n&&n<=879||1155<=n&&n<=1159||1160<=n&&n<=1161||1425<=n&&n<=1469||n==1471||1473<=n&&n<=1474||1476<=n&&n<=1477||n==1479||1552<=n&&n<=1562||1611<=n&&n<=1631||n==1648||1750<=n&&n<=1756||1759<=n&&n<=1764||1767<=n&&n<=1768||1770<=n&&n<=1773||n==1809||1840<=n&&n<=1866||1958<=n&&n<=1968||2027<=n&&n<=2035||2070<=n&&n<=2073||2075<=n&&n<=2083||2085<=n&&n<=2087||2089<=n&&n<=2093||2137<=n&&n<=2139||2260<=n&&n<=2273||2275<=n&&n<=2306||n==2362||n==2364||2369<=n&&n<=2376||n==2381||2385<=n&&n<=2391||2402<=n&&n<=2403||n==2433||n==2492||n==2494||2497<=n&&n<=2500||n==2509||n==2519||2530<=n&&n<=2531||2561<=n&&n<=2562||n==2620||2625<=n&&n<=2626||2631<=n&&n<=2632||2635<=n&&n<=2637||n==2641||2672<=n&&n<=2673||n==2677||2689<=n&&n<=2690||n==2748||2753<=n&&n<=2757||2759<=n&&n<=2760||n==2765||2786<=n&&n<=2787||2810<=n&&n<=2815||n==2817||n==2876||n==2878||n==2879||2881<=n&&n<=2884||n==2893||n==2902||n==2903||2914<=n&&n<=2915||n==2946||n==3006||n==3008||n==3021||n==3031||n==3072||3134<=n&&n<=3136||3142<=n&&n<=3144||3146<=n&&n<=3149||3157<=n&&n<=3158||3170<=n&&n<=3171||n==3201||n==3260||n==3263||n==3266||n==3270||3276<=n&&n<=3277||3285<=n&&n<=3286||3298<=n&&n<=3299||3328<=n&&n<=3329||3387<=n&&n<=3388||n==3390||3393<=n&&n<=3396||n==3405||n==3415||3426<=n&&n<=3427||n==3530||n==3535||3538<=n&&n<=3540||n==3542||n==3551||n==3633||3636<=n&&n<=3642||3655<=n&&n<=3662||n==3761||3764<=n&&n<=3769||3771<=n&&n<=3772||3784<=n&&n<=3789||3864<=n&&n<=3865||n==3893||n==3895||n==3897||3953<=n&&n<=3966||3968<=n&&n<=3972||3974<=n&&n<=3975||3981<=n&&n<=3991||3993<=n&&n<=4028||n==4038||4141<=n&&n<=4144||4146<=n&&n<=4151||4153<=n&&n<=4154||4157<=n&&n<=4158||4184<=n&&n<=4185||4190<=n&&n<=4192||4209<=n&&n<=4212||n==4226||4229<=n&&n<=4230||n==4237||n==4253||4957<=n&&n<=4959||5906<=n&&n<=5908||5938<=n&&n<=5940||5970<=n&&n<=5971||6002<=n&&n<=6003||6068<=n&&n<=6069||6071<=n&&n<=6077||n==6086||6089<=n&&n<=6099||n==6109||6155<=n&&n<=6157||6277<=n&&n<=6278||n==6313||6432<=n&&n<=6434||6439<=n&&n<=6440||n==6450||6457<=n&&n<=6459||6679<=n&&n<=6680||n==6683||n==6742||6744<=n&&n<=6750||n==6752||n==6754||6757<=n&&n<=6764||6771<=n&&n<=6780||n==6783||6832<=n&&n<=6845||n==6846||6912<=n&&n<=6915||n==6964||6966<=n&&n<=6970||n==6972||n==6978||7019<=n&&n<=7027||7040<=n&&n<=7041||7074<=n&&n<=7077||7080<=n&&n<=7081||7083<=n&&n<=7085||n==7142||7144<=n&&n<=7145||n==7149||7151<=n&&n<=7153||7212<=n&&n<=7219||7222<=n&&n<=7223||7376<=n&&n<=7378||7380<=n&&n<=7392||7394<=n&&n<=7400||n==7405||n==7412||7416<=n&&n<=7417||7616<=n&&n<=7673||7675<=n&&n<=7679||n==8204||8400<=n&&n<=8412||8413<=n&&n<=8416||n==8417||8418<=n&&n<=8420||8421<=n&&n<=8432||11503<=n&&n<=11505||n==11647||11744<=n&&n<=11775||12330<=n&&n<=12333||12334<=n&&n<=12335||12441<=n&&n<=12442||n==42607||42608<=n&&n<=42610||42612<=n&&n<=42621||42654<=n&&n<=42655||42736<=n&&n<=42737||n==43010||n==43014||n==43019||43045<=n&&n<=43046||43204<=n&&n<=43205||43232<=n&&n<=43249||43302<=n&&n<=43309||43335<=n&&n<=43345||43392<=n&&n<=43394||n==43443||43446<=n&&n<=43449||n==43452||n==43493||43561<=n&&n<=43566||43569<=n&&n<=43570||43573<=n&&n<=43574||n==43587||n==43596||n==43644||n==43696||43698<=n&&n<=43700||43703<=n&&n<=43704||43710<=n&&n<=43711||n==43713||43756<=n&&n<=43757||n==43766||n==44005||n==44008||n==44013||n==64286||65024<=n&&n<=65039||65056<=n&&n<=65071||65438<=n&&n<=65439||n==66045||n==66272||66422<=n&&n<=66426||68097<=n&&n<=68099||68101<=n&&n<=68102||68108<=n&&n<=68111||68152<=n&&n<=68154||n==68159||68325<=n&&n<=68326||n==69633||69688<=n&&n<=69702||69759<=n&&n<=69761||69811<=n&&n<=69814||69817<=n&&n<=69818||69888<=n&&n<=69890||69927<=n&&n<=69931||69933<=n&&n<=69940||n==70003||70016<=n&&n<=70017||70070<=n&&n<=70078||70090<=n&&n<=70092||70191<=n&&n<=70193||n==70196||70198<=n&&n<=70199||n==70206||n==70367||70371<=n&&n<=70378||70400<=n&&n<=70401||n==70460||n==70462||n==70464||n==70487||70502<=n&&n<=70508||70512<=n&&n<=70516||70712<=n&&n<=70719||70722<=n&&n<=70724||n==70726||n==70832||70835<=n&&n<=70840||n==70842||n==70845||70847<=n&&n<=70848||70850<=n&&n<=70851||n==71087||71090<=n&&n<=71093||71100<=n&&n<=71101||71103<=n&&n<=71104||71132<=n&&n<=71133||71219<=n&&n<=71226||n==71229||71231<=n&&n<=71232||n==71339||n==71341||71344<=n&&n<=71349||n==71351||71453<=n&&n<=71455||71458<=n&&n<=71461||71463<=n&&n<=71467||72193<=n&&n<=72198||72201<=n&&n<=72202||72243<=n&&n<=72248||72251<=n&&n<=72254||n==72263||72273<=n&&n<=72278||72281<=n&&n<=72283||72330<=n&&n<=72342||72344<=n&&n<=72345||72752<=n&&n<=72758||72760<=n&&n<=72765||n==72767||72850<=n&&n<=72871||72874<=n&&n<=72880||72882<=n&&n<=72883||72885<=n&&n<=72886||73009<=n&&n<=73014||n==73018||73020<=n&&n<=73021||73023<=n&&n<=73029||n==73031||92912<=n&&n<=92916||92976<=n&&n<=92982||94095<=n&&n<=94098||113821<=n&&n<=113822||n==119141||119143<=n&&n<=119145||119150<=n&&n<=119154||119163<=n&&n<=119170||119173<=n&&n<=119179||119210<=n&&n<=119213||119362<=n&&n<=119364||121344<=n&&n<=121398||121403<=n&&n<=121452||n==121461||n==121476||121499<=n&&n<=121503||121505<=n&&n<=121519||122880<=n&&n<=122886||122888<=n&&n<=122904||122907<=n&&n<=122913||122915<=n&&n<=122916||122918<=n&&n<=122922||125136<=n&&n<=125142||125252<=n&&n<=125258||917536<=n&&n<=917631||917760<=n&&n<=917999?a:127462<=n&&n<=127487?o:n==2307||n==2363||2366<=n&&n<=2368||2377<=n&&n<=2380||2382<=n&&n<=2383||2434<=n&&n<=2435||2495<=n&&n<=2496||2503<=n&&n<=2504||2507<=n&&n<=2508||n==2563||2622<=n&&n<=2624||n==2691||2750<=n&&n<=2752||n==2761||2763<=n&&n<=2764||2818<=n&&n<=2819||n==2880||2887<=n&&n<=2888||2891<=n&&n<=2892||n==3007||3009<=n&&n<=3010||3014<=n&&n<=3016||3018<=n&&n<=3020||3073<=n&&n<=3075||3137<=n&&n<=3140||3202<=n&&n<=3203||n==3262||3264<=n&&n<=3265||3267<=n&&n<=3268||3271<=n&&n<=3272||3274<=n&&n<=3275||3330<=n&&n<=3331||3391<=n&&n<=3392||3398<=n&&n<=3400||3402<=n&&n<=3404||3458<=n&&n<=3459||3536<=n&&n<=3537||3544<=n&&n<=3550||3570<=n&&n<=3571||n==3635||n==3763||3902<=n&&n<=3903||n==3967||n==4145||4155<=n&&n<=4156||4182<=n&&n<=4183||n==4228||n==6070||6078<=n&&n<=6085||6087<=n&&n<=6088||6435<=n&&n<=6438||6441<=n&&n<=6443||6448<=n&&n<=6449||6451<=n&&n<=6456||6681<=n&&n<=6682||n==6741||n==6743||6765<=n&&n<=6770||n==6916||n==6965||n==6971||6973<=n&&n<=6977||6979<=n&&n<=6980||n==7042||n==7073||7078<=n&&n<=7079||n==7082||n==7143||7146<=n&&n<=7148||n==7150||7154<=n&&n<=7155||7204<=n&&n<=7211||7220<=n&&n<=7221||n==7393||7410<=n&&n<=7411||n==7415||43043<=n&&n<=43044||n==43047||43136<=n&&n<=43137||43188<=n&&n<=43203||43346<=n&&n<=43347||n==43395||43444<=n&&n<=43445||43450<=n&&n<=43451||43453<=n&&n<=43456||43567<=n&&n<=43568||43571<=n&&n<=43572||n==43597||n==43755||43758<=n&&n<=43759||n==43765||44003<=n&&n<=44004||44006<=n&&n<=44007||44009<=n&&n<=44010||n==44012||n==69632||n==69634||n==69762||69808<=n&&n<=69810||69815<=n&&n<=69816||n==69932||n==70018||70067<=n&&n<=70069||70079<=n&&n<=70080||70188<=n&&n<=70190||70194<=n&&n<=70195||n==70197||70368<=n&&n<=70370||70402<=n&&n<=70403||n==70463||70465<=n&&n<=70468||70471<=n&&n<=70472||70475<=n&&n<=70477||70498<=n&&n<=70499||70709<=n&&n<=70711||70720<=n&&n<=70721||n==70725||70833<=n&&n<=70834||n==70841||70843<=n&&n<=70844||n==70846||n==70849||71088<=n&&n<=71089||71096<=n&&n<=71099||n==71102||71216<=n&&n<=71218||71227<=n&&n<=71228||n==71230||n==71340||71342<=n&&n<=71343||n==71350||71456<=n&&n<=71457||n==71462||72199<=n&&n<=72200||n==72249||72279<=n&&n<=72280||n==72343||n==72751||n==72766||n==72873||n==72881||n==72884||94033<=n&&n<=94078||n==119142||n==119149?l:4352<=n&&n<=4447||43360<=n&&n<=43388?h:4448<=n&&n<=4519||55216<=n&&n<=55238?u:4520<=n&&n<=4607||55243<=n&&n<=55291?c:n==44032||n==44060||n==44088||n==44116||n==44144||n==44172||n==44200||n==44228||n==44256||n==44284||n==44312||n==44340||n==44368||n==44396||n==44424||n==44452||n==44480||n==44508||n==44536||n==44564||n==44592||n==44620||n==44648||n==44676||n==44704||n==44732||n==44760||n==44788||n==44816||n==44844||n==44872||n==44900||n==44928||n==44956||n==44984||n==45012||n==45040||n==45068||n==45096||n==45124||n==45152||n==45180||n==45208||n==45236||n==45264||n==45292||n==45320||n==45348||n==45376||n==45404||n==45432||n==45460||n==45488||n==45516||n==45544||n==45572||n==45600||n==45628||n==45656||n==45684||n==45712||n==45740||n==45768||n==45796||n==45824||n==45852||n==45880||n==45908||n==45936||n==45964||n==45992||n==46020||n==46048||n==46076||n==46104||n==46132||n==46160||n==46188||n==46216||n==46244||n==46272||n==46300||n==46328||n==46356||n==46384||n==46412||n==46440||n==46468||n==46496||n==46524||n==46552||n==46580||n==46608||n==46636||n==46664||n==46692||n==46720||n==46748||n==46776||n==46804||n==46832||n==46860||n==46888||n==46916||n==46944||n==46972||n==47e3||n==47028||n==47056||n==47084||n==47112||n==47140||n==47168||n==47196||n==47224||n==47252||n==47280||n==47308||n==47336||n==47364||n==47392||n==47420||n==47448||n==47476||n==47504||n==47532||n==47560||n==47588||n==47616||n==47644||n==47672||n==47700||n==47728||n==47756||n==47784||n==47812||n==47840||n==47868||n==47896||n==47924||n==47952||n==47980||n==48008||n==48036||n==48064||n==48092||n==48120||n==48148||n==48176||n==48204||n==48232||n==48260||n==48288||n==48316||n==48344||n==48372||n==48400||n==48428||n==48456||n==48484||n==48512||n==48540||n==48568||n==48596||n==48624||n==48652||n==48680||n==48708||n==48736||n==48764||n==48792||n==48820||n==48848||n==48876||n==48904||n==48932||n==48960||n==48988||n==49016||n==49044||n==49072||n==49100||n==49128||n==49156||n==49184||n==49212||n==49240||n==49268||n==49296||n==49324||n==49352||n==49380||n==49408||n==49436||n==49464||n==49492||n==49520||n==49548||n==49576||n==49604||n==49632||n==49660||n==49688||n==49716||n==49744||n==49772||n==49800||n==49828||n==49856||n==49884||n==49912||n==49940||n==49968||n==49996||n==50024||n==50052||n==50080||n==50108||n==50136||n==50164||n==50192||n==50220||n==50248||n==50276||n==50304||n==50332||n==50360||n==50388||n==50416||n==50444||n==50472||n==50500||n==50528||n==50556||n==50584||n==50612||n==50640||n==50668||n==50696||n==50724||n==50752||n==50780||n==50808||n==50836||n==50864||n==50892||n==50920||n==50948||n==50976||n==51004||n==51032||n==51060||n==51088||n==51116||n==51144||n==51172||n==51200||n==51228||n==51256||n==51284||n==51312||n==51340||n==51368||n==51396||n==51424||n==51452||n==51480||n==51508||n==51536||n==51564||n==51592||n==51620||n==51648||n==51676||n==51704||n==51732||n==51760||n==51788||n==51816||n==51844||n==51872||n==51900||n==51928||n==51956||n==51984||n==52012||n==52040||n==52068||n==52096||n==52124||n==52152||n==52180||n==52208||n==52236||n==52264||n==52292||n==52320||n==52348||n==52376||n==52404||n==52432||n==52460||n==52488||n==52516||n==52544||n==52572||n==52600||n==52628||n==52656||n==52684||n==52712||n==52740||n==52768||n==52796||n==52824||n==52852||n==52880||n==52908||n==52936||n==52964||n==52992||n==53020||n==53048||n==53076||n==53104||n==53132||n==53160||n==53188||n==53216||n==53244||n==53272||n==53300||n==53328||n==53356||n==53384||n==53412||n==53440||n==53468||n==53496||n==53524||n==53552||n==53580||n==53608||n==53636||n==53664||n==53692||n==53720||n==53748||n==53776||n==53804||n==53832||n==53860||n==53888||n==53916||n==53944||n==53972||n==54e3||n==54028||n==54056||n==54084||n==54112||n==54140||n==54168||n==54196||n==54224||n==54252||n==54280||n==54308||n==54336||n==54364||n==54392||n==54420||n==54448||n==54476||n==54504||n==54532||n==54560||n==54588||n==54616||n==54644||n==54672||n==54700||n==54728||n==54756||n==54784||n==54812||n==54840||n==54868||n==54896||n==54924||n==54952||n==54980||n==55008||n==55036||n==55064||n==55092||n==55120||n==55148||n==55176?f:44033<=n&&n<=44059||44061<=n&&n<=44087||44089<=n&&n<=44115||44117<=n&&n<=44143||44145<=n&&n<=44171||44173<=n&&n<=44199||44201<=n&&n<=44227||44229<=n&&n<=44255||44257<=n&&n<=44283||44285<=n&&n<=44311||44313<=n&&n<=44339||44341<=n&&n<=44367||44369<=n&&n<=44395||44397<=n&&n<=44423||44425<=n&&n<=44451||44453<=n&&n<=44479||44481<=n&&n<=44507||44509<=n&&n<=44535||44537<=n&&n<=44563||44565<=n&&n<=44591||44593<=n&&n<=44619||44621<=n&&n<=44647||44649<=n&&n<=44675||44677<=n&&n<=44703||44705<=n&&n<=44731||44733<=n&&n<=44759||44761<=n&&n<=44787||44789<=n&&n<=44815||44817<=n&&n<=44843||44845<=n&&n<=44871||44873<=n&&n<=44899||44901<=n&&n<=44927||44929<=n&&n<=44955||44957<=n&&n<=44983||44985<=n&&n<=45011||45013<=n&&n<=45039||45041<=n&&n<=45067||45069<=n&&n<=45095||45097<=n&&n<=45123||45125<=n&&n<=45151||45153<=n&&n<=45179||45181<=n&&n<=45207||45209<=n&&n<=45235||45237<=n&&n<=45263||45265<=n&&n<=45291||45293<=n&&n<=45319||45321<=n&&n<=45347||45349<=n&&n<=45375||45377<=n&&n<=45403||45405<=n&&n<=45431||45433<=n&&n<=45459||45461<=n&&n<=45487||45489<=n&&n<=45515||45517<=n&&n<=45543||45545<=n&&n<=45571||45573<=n&&n<=45599||45601<=n&&n<=45627||45629<=n&&n<=45655||45657<=n&&n<=45683||45685<=n&&n<=45711||45713<=n&&n<=45739||45741<=n&&n<=45767||45769<=n&&n<=45795||45797<=n&&n<=45823||45825<=n&&n<=45851||45853<=n&&n<=45879||45881<=n&&n<=45907||45909<=n&&n<=45935||45937<=n&&n<=45963||45965<=n&&n<=45991||45993<=n&&n<=46019||46021<=n&&n<=46047||46049<=n&&n<=46075||46077<=n&&n<=46103||46105<=n&&n<=46131||46133<=n&&n<=46159||46161<=n&&n<=46187||46189<=n&&n<=46215||46217<=n&&n<=46243||46245<=n&&n<=46271||46273<=n&&n<=46299||46301<=n&&n<=46327||46329<=n&&n<=46355||46357<=n&&n<=46383||46385<=n&&n<=46411||46413<=n&&n<=46439||46441<=n&&n<=46467||46469<=n&&n<=46495||46497<=n&&n<=46523||46525<=n&&n<=46551||46553<=n&&n<=46579||46581<=n&&n<=46607||46609<=n&&n<=46635||46637<=n&&n<=46663||46665<=n&&n<=46691||46693<=n&&n<=46719||46721<=n&&n<=46747||46749<=n&&n<=46775||46777<=n&&n<=46803||46805<=n&&n<=46831||46833<=n&&n<=46859||46861<=n&&n<=46887||46889<=n&&n<=46915||46917<=n&&n<=46943||46945<=n&&n<=46971||46973<=n&&n<=46999||47001<=n&&n<=47027||47029<=n&&n<=47055||47057<=n&&n<=47083||47085<=n&&n<=47111||47113<=n&&n<=47139||47141<=n&&n<=47167||47169<=n&&n<=47195||47197<=n&&n<=47223||47225<=n&&n<=47251||47253<=n&&n<=47279||47281<=n&&n<=47307||47309<=n&&n<=47335||47337<=n&&n<=47363||47365<=n&&n<=47391||47393<=n&&n<=47419||47421<=n&&n<=47447||47449<=n&&n<=47475||47477<=n&&n<=47503||47505<=n&&n<=47531||47533<=n&&n<=47559||47561<=n&&n<=47587||47589<=n&&n<=47615||47617<=n&&n<=47643||47645<=n&&n<=47671||47673<=n&&n<=47699||47701<=n&&n<=47727||47729<=n&&n<=47755||47757<=n&&n<=47783||47785<=n&&n<=47811||47813<=n&&n<=47839||47841<=n&&n<=47867||47869<=n&&n<=47895||47897<=n&&n<=47923||47925<=n&&n<=47951||47953<=n&&n<=47979||47981<=n&&n<=48007||48009<=n&&n<=48035||48037<=n&&n<=48063||48065<=n&&n<=48091||48093<=n&&n<=48119||48121<=n&&n<=48147||48149<=n&&n<=48175||48177<=n&&n<=48203||48205<=n&&n<=48231||48233<=n&&n<=48259||48261<=n&&n<=48287||48289<=n&&n<=48315||48317<=n&&n<=48343||48345<=n&&n<=48371||48373<=n&&n<=48399||48401<=n&&n<=48427||48429<=n&&n<=48455||48457<=n&&n<=48483||48485<=n&&n<=48511||48513<=n&&n<=48539||48541<=n&&n<=48567||48569<=n&&n<=48595||48597<=n&&n<=48623||48625<=n&&n<=48651||48653<=n&&n<=48679||48681<=n&&n<=48707||48709<=n&&n<=48735||48737<=n&&n<=48763||48765<=n&&n<=48791||48793<=n&&n<=48819||48821<=n&&n<=48847||48849<=n&&n<=48875||48877<=n&&n<=48903||48905<=n&&n<=48931||48933<=n&&n<=48959||48961<=n&&n<=48987||48989<=n&&n<=49015||49017<=n&&n<=49043||49045<=n&&n<=49071||49073<=n&&n<=49099||49101<=n&&n<=49127||49129<=n&&n<=49155||49157<=n&&n<=49183||49185<=n&&n<=49211||49213<=n&&n<=49239||49241<=n&&n<=49267||49269<=n&&n<=49295||49297<=n&&n<=49323||49325<=n&&n<=49351||49353<=n&&n<=49379||49381<=n&&n<=49407||49409<=n&&n<=49435||49437<=n&&n<=49463||49465<=n&&n<=49491||49493<=n&&n<=49519||49521<=n&&n<=49547||49549<=n&&n<=49575||49577<=n&&n<=49603||49605<=n&&n<=49631||49633<=n&&n<=49659||49661<=n&&n<=49687||49689<=n&&n<=49715||49717<=n&&n<=49743||49745<=n&&n<=49771||49773<=n&&n<=49799||49801<=n&&n<=49827||49829<=n&&n<=49855||49857<=n&&n<=49883||49885<=n&&n<=49911||49913<=n&&n<=49939||49941<=n&&n<=49967||49969<=n&&n<=49995||49997<=n&&n<=50023||50025<=n&&n<=50051||50053<=n&&n<=50079||50081<=n&&n<=50107||50109<=n&&n<=50135||50137<=n&&n<=50163||50165<=n&&n<=50191||50193<=n&&n<=50219||50221<=n&&n<=50247||50249<=n&&n<=50275||50277<=n&&n<=50303||50305<=n&&n<=50331||50333<=n&&n<=50359||50361<=n&&n<=50387||50389<=n&&n<=50415||50417<=n&&n<=50443||50445<=n&&n<=50471||50473<=n&&n<=50499||50501<=n&&n<=50527||50529<=n&&n<=50555||50557<=n&&n<=50583||50585<=n&&n<=50611||50613<=n&&n<=50639||50641<=n&&n<=50667||50669<=n&&n<=50695||50697<=n&&n<=50723||50725<=n&&n<=50751||50753<=n&&n<=50779||50781<=n&&n<=50807||50809<=n&&n<=50835||50837<=n&&n<=50863||50865<=n&&n<=50891||50893<=n&&n<=50919||50921<=n&&n<=50947||50949<=n&&n<=50975||50977<=n&&n<=51003||51005<=n&&n<=51031||51033<=n&&n<=51059||51061<=n&&n<=51087||51089<=n&&n<=51115||51117<=n&&n<=51143||51145<=n&&n<=51171||51173<=n&&n<=51199||51201<=n&&n<=51227||51229<=n&&n<=51255||51257<=n&&n<=51283||51285<=n&&n<=51311||51313<=n&&n<=51339||51341<=n&&n<=51367||51369<=n&&n<=51395||51397<=n&&n<=51423||51425<=n&&n<=51451||51453<=n&&n<=51479||51481<=n&&n<=51507||51509<=n&&n<=51535||51537<=n&&n<=51563||51565<=n&&n<=51591||51593<=n&&n<=51619||51621<=n&&n<=51647||51649<=n&&n<=51675||51677<=n&&n<=51703||51705<=n&&n<=51731||51733<=n&&n<=51759||51761<=n&&n<=51787||51789<=n&&n<=51815||51817<=n&&n<=51843||51845<=n&&n<=51871||51873<=n&&n<=51899||51901<=n&&n<=51927||51929<=n&&n<=51955||51957<=n&&n<=51983||51985<=n&&n<=52011||52013<=n&&n<=52039||52041<=n&&n<=52067||52069<=n&&n<=52095||52097<=n&&n<=52123||52125<=n&&n<=52151||52153<=n&&n<=52179||52181<=n&&n<=52207||52209<=n&&n<=52235||52237<=n&&n<=52263||52265<=n&&n<=52291||52293<=n&&n<=52319||52321<=n&&n<=52347||52349<=n&&n<=52375||52377<=n&&n<=52403||52405<=n&&n<=52431||52433<=n&&n<=52459||52461<=n&&n<=52487||52489<=n&&n<=52515||52517<=n&&n<=52543||52545<=n&&n<=52571||52573<=n&&n<=52599||52601<=n&&n<=52627||52629<=n&&n<=52655||52657<=n&&n<=52683||52685<=n&&n<=52711||52713<=n&&n<=52739||52741<=n&&n<=52767||52769<=n&&n<=52795||52797<=n&&n<=52823||52825<=n&&n<=52851||52853<=n&&n<=52879||52881<=n&&n<=52907||52909<=n&&n<=52935||52937<=n&&n<=52963||52965<=n&&n<=52991||52993<=n&&n<=53019||53021<=n&&n<=53047||53049<=n&&n<=53075||53077<=n&&n<=53103||53105<=n&&n<=53131||53133<=n&&n<=53159||53161<=n&&n<=53187||53189<=n&&n<=53215||53217<=n&&n<=53243||53245<=n&&n<=53271||53273<=n&&n<=53299||53301<=n&&n<=53327||53329<=n&&n<=53355||53357<=n&&n<=53383||53385<=n&&n<=53411||53413<=n&&n<=53439||53441<=n&&n<=53467||53469<=n&&n<=53495||53497<=n&&n<=53523||53525<=n&&n<=53551||53553<=n&&n<=53579||53581<=n&&n<=53607||53609<=n&&n<=53635||53637<=n&&n<=53663||53665<=n&&n<=53691||53693<=n&&n<=53719||53721<=n&&n<=53747||53749<=n&&n<=53775||53777<=n&&n<=53803||53805<=n&&n<=53831||53833<=n&&n<=53859||53861<=n&&n<=53887||53889<=n&&n<=53915||53917<=n&&n<=53943||53945<=n&&n<=53971||53973<=n&&n<=53999||54001<=n&&n<=54027||54029<=n&&n<=54055||54057<=n&&n<=54083||54085<=n&&n<=54111||54113<=n&&n<=54139||54141<=n&&n<=54167||54169<=n&&n<=54195||54197<=n&&n<=54223||54225<=n&&n<=54251||54253<=n&&n<=54279||54281<=n&&n<=54307||54309<=n&&n<=54335||54337<=n&&n<=54363||54365<=n&&n<=54391||54393<=n&&n<=54419||54421<=n&&n<=54447||54449<=n&&n<=54475||54477<=n&&n<=54503||54505<=n&&n<=54531||54533<=n&&n<=54559||54561<=n&&n<=54587||54589<=n&&n<=54615||54617<=n&&n<=54643||54645<=n&&n<=54671||54673<=n&&n<=54699||54701<=n&&n<=54727||54729<=n&&n<=54755||54757<=n&&n<=54783||54785<=n&&n<=54811||54813<=n&&n<=54839||54841<=n&&n<=54867||54869<=n&&n<=54895||54897<=n&&n<=54923||54925<=n&&n<=54951||54953<=n&&n<=54979||54981<=n&&n<=55007||55009<=n&&n<=55035||55037<=n&&n<=55063||55065<=n&&n<=55091||55093<=n&&n<=55119||55121<=n&&n<=55147||55149<=n&&n<=55175||55177<=n&&n<=55203?p:n==9757||n==9977||9994<=n&&n<=9997||n==127877||127938<=n&&n<=127940||n==127943||127946<=n&&n<=127948||128066<=n&&n<=128067||128070<=n&&n<=128080||n==128110||128112<=n&&n<=128120||n==128124||128129<=n&&n<=128131||128133<=n&&n<=128135||n==128170||128372<=n&&n<=128373||n==128378||n==128400||128405<=n&&n<=128406||128581<=n&&n<=128583||128587<=n&&n<=128591||n==128675||128692<=n&&n<=128694||n==128704||n==128716||129304<=n&&n<=129308||129310<=n&&n<=129311||n==129318||129328<=n&&n<=129337||129341<=n&&n<=129342||129489<=n&&n<=129501?_:127995<=n&&n<=127999?x:n==8205?d:n==9792||n==9794||9877<=n&&n<=9878||n==9992||n==10084||n==127752||n==127806||n==127859||n==127891||n==127908||n==127912||n==127979||n==127981||n==128139||128187<=n&&n<=128188||n==128295||n==128300||n==128488||n==128640||n==128658?T:128102<=n&&n<=128105?A:m}return this}r.exports&&(r.exports=t)}(ar)),ar.exports}var Vh=Hh();const uo=zh(Vh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="174",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,co=1,Wh=2,kl=1,Xh=2,xn=3,yn=0,Be=1,tn=2,Un=0,Si=1,fo=2,po=3,mo=4,Yh=5,Zn=100,qh=101,jh=102,Kh=103,Zh=104,$h=200,Jh=201,Qh=202,tu=203,Wr=204,Xr=205,eu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,lu=213,hu=214,Yr=0,qr=1,jr=2,bi=3,Kr=4,Zr=5,$r=6,Jr=7,zl=0,uu=1,cu=2,Nn=0,fu=1,pu=2,du=3,mu=4,xu=5,gu=6,_u=7,xo="attached",vu="detached",Hl=300,wi=301,Ri=302,Qr=303,ta=304,tr=306,Di=1e3,Fn=1001,Ks=1002,be=1003,Vl=1004,Qi=1005,Ue=1006,Vs=1007,_n=1008,Sn=1009,Gl=1010,Wl=1011,ss=1012,Ia=1013,ei=1014,$e=1015,ls=1016,Ua=1017,Na=1018,Pi=1020,Xl=35902,Yl=1021,ql=1022,Ge=1023,jl=1024,Kl=1025,Ai=1026,Bi=1027,Oa=1028,ka=1029,Zl=1030,za=1031,Ha=1033,Gs=33776,Ws=33777,Xs=33778,Ys=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,aa=37492,oa=37496,la=37808,ha=37809,ua=37810,ca=37811,fa=37812,pa=37813,da=37814,ma=37815,xa=37816,ga=37817,_a=37818,va=37819,Ea=37820,Ma=37821,qs=36492,ya=36494,Sa=36495,$l=36283,Aa=36284,Ta=36285,Ca=36286,rs=2300,as=2301,or=2302,go=2400,_o=2401,vo=2402,Eu=2500,Mu=0,Jl=1,ba=2,yu=3200,Su=3201,Ql=0,Au=1,Ln="",ve="srgb",Re="srgb-linear",Zs="linear",te="srgb",ri=7680,Eo=519,Tu=512,Cu=513,bu=514,th=515,wu=516,Ru=517,Du=518,Pu=519,wa=35044,Mo="300 es",vn=2e3,$s=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const es=Math.PI/180,Li=180/Math.PI;function Je(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[r&255]+Me[r>>8&255]+Me[r>>16&255]+Me[r>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function Nt(r,t,e){return Math.max(t,Math.min(e,r))}function Va(r,t){return(r%t+t)%t}function Bu(r,t,e,i,s){return i+(r-t)*(s-i)/(e-t)}function Lu(r,t,e){return r!==t?(e-r)/(t-r):0}function ns(r,t,e){return(1-e)*r+e*t}function Fu(r,t,e,i){return ns(r,t,1-Math.exp(-e*i))}function Iu(r,t=1){return t-Math.abs(Va(r,t*2)-t)}function Uu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Nu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Ou(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ku(r,t){return r+Math.random()*(t-r)}function zu(r){return r*(.5-Math.random())}function Hu(r){r!==void 0&&(yo=r);let t=yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vu(r){return r*es}function Gu(r){return r*Li}function Wu(r){return(r&r-1)===0&&r!==0}function Xu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qu(r,t,e,i,s){const a=Math.cos,o=Math.sin,l=a(e/2),h=o(e/2),u=a((t+i)/2),c=o((t+i)/2),f=a((t-i)/2),p=o((t-i)/2),m=a((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":r.set(l*c,h*f,h*p,l*u);break;case"YZY":r.set(h*p,l*c,h*f,l*u);break;case"ZXZ":r.set(h*f,h*p,l*c,l*u);break;case"XZX":r.set(l*c,h*g,h*m,l*u);break;case"YXY":r.set(h*m,l*c,h*g,l*u);break;case"ZYZ":r.set(h*g,h*m,l*c,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const eh={DEG2RAD:es,RAD2DEG:Li,generateUUID:Je,clamp:Nt,euclideanModulo:Va,mapLinear:Bu,inverseLerp:Lu,lerp:ns,damp:Fu,pingpong:Iu,smoothstep:Uu,smootherstep:Nu,randInt:Ou,randFloat:ku,randFloatSpread:zu,seededRandom:Hu,degToRad:Vu,radToDeg:Gu,isPowerOfTwo:Wu,ceilPowerOfTwo:Xu,floorPowerOfTwo:Yu,setQuaternionFromProperEuler:qu,normalize:Jt,denormalize:Ke};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Nt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*s+t.x,this.y=a*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,i,s,a,o,l,h,u){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,l,h,u)}set(t,e,i,s,a,o,l,h,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=l,c[3]=e,c[4]=a,c[5]=h,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],l=i[3],h=i[6],u=i[1],c=i[4],f=i[7],p=i[2],m=i[5],g=i[8],_=s[0],x=s[3],d=s[6],T=s[1],A=s[4],y=s[7],D=s[2],b=s[5],w=s[8];return a[0]=o*_+l*T+h*D,a[3]=o*x+l*A+h*b,a[6]=o*d+l*y+h*w,a[1]=u*_+c*T+f*D,a[4]=u*x+c*A+f*b,a[7]=u*d+c*y+f*w,a[2]=p*_+m*T+g*D,a[5]=p*x+m*A+g*b,a[8]=p*d+m*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8];return e*o*c-e*l*u-i*a*c+i*l*h+s*a*u-s*o*h}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8],f=c*o-l*u,p=l*h-c*a,m=u*a-o*h,g=e*f+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*u-c*i)*_,t[2]=(l*i-s*o)*_,t[3]=p*_,t[4]=(c*e-s*h)*_,t[5]=(s*a-l*e)*_,t[6]=m*_,t[7]=(i*h-u*e)*_,t[8]=(o*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,o,l){const h=Math.cos(a),u=Math.sin(a);return this.set(i*h,i*u,-i*(h*o+u*l)+o+t,-s*u,s*h,-s*(-u*o+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(lr.makeScale(t,e)),this}rotate(t){return this.premultiply(lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lr=new Lt;function nh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function os(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ju(){const r=os("canvas");return r.style.display="block",r}const So={};function jn(r){r in So||(So[r]=!0,console.warn(r))}function Ku(r,t,e){return new Promise(function(i,s){function a(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Zu(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $u(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ao=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),To=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ju(){const r={enabled:!0,workingColorSpace:Re,spaces:{},convert:function(s,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===te&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Zs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,o){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Re]:{primaries:t,whitePoint:i,transfer:Zs,toXYZ:Ao,fromXYZ:To,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:i,transfer:te,toXYZ:Ao,fromXYZ:To,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),r}const Gt=Ju();function En(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ti(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ai;class Qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=os("canvas")),ai.width=t.width,ai.height=t.height;const i=ai.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ai}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=os("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=En(a[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(En(e[i]/255)*255):e[i]=En(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tc=0;class Ga{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=Je(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?a.push(hr(s[o].image)):a.push(hr(s[o]))}else a=hr(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function hr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ec=0;class ge extends ii{constructor(t=ge.DEFAULT_IMAGE,e=ge.DEFAULT_MAPPING,i=Fn,s=Fn,a=Ue,o=_n,l=Ge,h=Sn,u=ge.DEFAULT_ANISOTROPY,c=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=Je(),this.name="",this.source=new Ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ge.DEFAULT_IMAGE=null;ge.DEFAULT_MAPPING=Hl;ge.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,i=0,s=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const h=t.elements,u=h[0],c=h[4],f=h[8],p=h[1],m=h[5],g=h[9],_=h[2],x=h[6],d=h[10];if(Math.abs(c-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(c+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(u+1)/2,y=(m+1)/2,D=(d+1)/2,b=(c+p)/4,w=(f+_)/4,F=(g+x)/4;return A>y&&A>D?A<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(A),s=b/i,a=w/i):y>D?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=b/s,a=F/s):D<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),i=w/a,s=F/a),this.set(i,s,a,e),this}let T=Math.sqrt((x-g)*(x-g)+(f-_)*(f-_)+(p-c)*(p-c));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(f-_)/T,this.z=(p-c)/T,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nc extends ii{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ge(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ga(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ih extends ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ic extends ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,o,l){let h=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3];const p=a[o+0],m=a[o+1],g=a[o+2],_=a[o+3];if(l===0){t[e+0]=h,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(l===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||h!==p||u!==m||c!==g){let x=1-l;const d=h*p+u*m+c*g+f*_,T=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const D=Math.sqrt(A),b=Math.atan2(D,d*T);x=Math.sin(x*b)/D,l=Math.sin(l*b)/D}const y=l*T;if(h=h*x+p*y,u=u*x+m*y,c=c*x+g*y,f=f*x+_*y,x===1-l){const D=1/Math.sqrt(h*h+u*u+c*c+f*f);h*=D,u*=D,c*=D,f*=D}}t[e]=h,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,a,o){const l=i[s],h=i[s+1],u=i[s+2],c=i[s+3],f=a[o],p=a[o+1],m=a[o+2],g=a[o+3];return t[e]=l*g+c*f+h*m-u*p,t[e+1]=h*g+c*p+u*f-l*m,t[e+2]=u*g+c*m+l*p-h*f,t[e+3]=c*g-l*f-h*p-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,o=t._order,l=Math.cos,h=Math.sin,u=l(i/2),c=l(s/2),f=l(a/2),p=h(i/2),m=h(s/2),g=h(a/2);switch(o){case"XYZ":this._x=p*c*f+u*m*g,this._y=u*m*f-p*c*g,this._z=u*c*g+p*m*f,this._w=u*c*f-p*m*g;break;case"YXZ":this._x=p*c*f+u*m*g,this._y=u*m*f-p*c*g,this._z=u*c*g-p*m*f,this._w=u*c*f+p*m*g;break;case"ZXY":this._x=p*c*f-u*m*g,this._y=u*m*f+p*c*g,this._z=u*c*g+p*m*f,this._w=u*c*f-p*m*g;break;case"ZYX":this._x=p*c*f-u*m*g,this._y=u*m*f+p*c*g,this._z=u*c*g-p*m*f,this._w=u*c*f+p*m*g;break;case"YZX":this._x=p*c*f+u*m*g,this._y=u*m*f+p*c*g,this._z=u*c*g-p*m*f,this._w=u*c*f-p*m*g;break;case"XZY":this._x=p*c*f-u*m*g,this._y=u*m*f-p*c*g,this._z=u*c*g+p*m*f,this._w=u*c*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],o=e[1],l=e[5],h=e[9],u=e[2],c=e[6],f=e[10],p=i+l+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(c-h)*m,this._y=(a-u)*m,this._z=(o-s)*m}else if(i>l&&i>f){const m=2*Math.sqrt(1+i-l-f);this._w=(c-h)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(a+u)/m}else if(l>f){const m=2*Math.sqrt(1+l-i-f);this._w=(a-u)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+f-i-l);this._w=(o-s)/m,this._x=(a+u)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,o=t._w,l=e._x,h=e._y,u=e._z,c=e._w;return this._x=i*c+o*l+s*u-a*h,this._y=s*c+o*h+a*l-i*u,this._z=a*c+o*u+i*h-s*l,this._w=o*c-i*l-s*h-a*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,o=this._w;let l=o*t._w+i*t._x+s*t._y+a*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=i,this._y=s,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const u=Math.sqrt(h),c=Math.atan2(u,l),f=Math.sin((1-e)*c)/u,p=Math.sin(e*c)/u;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Co.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,o=t.y,l=t.z,h=t.w,u=2*(o*s-l*i),c=2*(l*e-a*s),f=2*(a*i-o*e);return this.x=e+h*u+o*f-l*c,this.y=i+h*c+l*u-a*f,this.z=s+h*f+a*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,o=e.x,l=e.y,h=e.z;return this.x=s*h-a*l,this.y=a*o-i*h,this.z=i*l-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ur.copy(this).projectOnVector(t),this.sub(ur)}reflect(t){return this.sub(ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Nt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ur=new P,Co=new nn;class An{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(a,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ds.copy(i.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),ms.subVectors(this.max,Wi),oi.subVectors(t.a,Wi),li.subVectors(t.b,Wi),hi.subVectors(t.c,Wi),Tn.subVectors(li,oi),Cn.subVectors(hi,li),Hn.subVectors(oi,hi);let e=[0,-Tn.z,Tn.y,0,-Cn.z,Cn.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,Cn.z,0,-Cn.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-Cn.y,Cn.x,0,-Hn.y,Hn.x,0];return!cr(e,oi,li,hi,ms)||(e=[1,0,0,0,1,0,0,0,1],!cr(e,oi,li,hi,ms))?!1:(xs.crossVectors(Tn,Cn),e=[xs.x,xs.y,xs.z],cr(e,oi,li,hi,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new P,new P,new P,new P,new P,new P,new P,new P],Ye=new P,ds=new An,oi=new P,li=new P,hi=new P,Tn=new P,Cn=new P,Hn=new P,Wi=new P,ms=new P,xs=new P,Vn=new P;function cr(r,t,e,i,s){for(let a=0,o=r.length-3;a<=o;a+=3){Vn.fromArray(r,a);const l=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),h=t.dot(Vn),u=e.dot(Vn),c=i.dot(Vn);if(Math.max(-Math.max(h,u,c),Math.min(h,u,c))>l)return!1}return!0}const sc=new An,Xi=new P,fr=new P;class rn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sc.setFromPoints(t).getCenter(i);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(fr)),this.expandByPoint(Xi.copy(t.center).sub(fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new P,pr=new P,gs=new P,bn=new P,dr=new P,_s=new P,mr=new P;class hs{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(pr);const a=t.distanceTo(e)*.5,o=-this.direction.dot(gs),l=bn.dot(this.direction),h=-bn.dot(gs),u=bn.lengthSq(),c=Math.abs(1-o*o);let f,p,m,g;if(c>0)if(f=o*h-l,p=o*l-h,g=a*c,f>=0)if(p>=-g)if(p<=g){const _=1/c;f*=_,p*=_,m=f*(f+o*p+2*l)+p*(o*f+p+2*h)+u}else p=a,f=Math.max(0,-(o*p+l)),m=-f*f+p*(p+2*h)+u;else p=-a,f=Math.max(0,-(o*p+l)),m=-f*f+p*(p+2*h)+u;else p<=-g?(f=Math.max(0,-(-o*a+l)),p=f>0?-a:Math.min(Math.max(-a,-h),a),m=-f*f+p*(p+2*h)+u):p<=g?(f=0,p=Math.min(Math.max(-a,-h),a),m=p*(p+2*h)+u):(f=Math.max(0,-(o*a+l)),p=f>0?a:Math.min(Math.max(-a,-h),a),m=-f*f+p*(p+2*h)+u);else p=o>0?-a:a,f=Math.max(0,-(o*p+l)),m=-f*f+p*(p+2*h)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pr).addScaledVector(gs,p),m}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const i=cn.dot(this.direction),s=cn.dot(cn)-i*i,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),l=i-o,h=i+o;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,o,l,h;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(t.min.x-p.x)*u,s=(t.max.x-p.x)*u):(i=(t.max.x-p.x)*u,s=(t.min.x-p.x)*u),c>=0?(a=(t.min.y-p.y)*c,o=(t.max.y-p.y)*c):(a=(t.max.y-p.y)*c,o=(t.min.y-p.y)*c),i>o||a>s||((a>i||isNaN(i))&&(i=a),(o<s||isNaN(s))&&(s=o),f>=0?(l=(t.min.z-p.z)*f,h=(t.max.z-p.z)*f):(l=(t.max.z-p.z)*f,h=(t.min.z-p.z)*f),i>h||l>s)||((l>i||i!==i)&&(i=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,i,s,a){dr.subVectors(e,t),_s.subVectors(i,t),mr.crossVectors(dr,_s);let o=this.direction.dot(mr),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;bn.subVectors(this.origin,t);const h=l*this.direction.dot(_s.crossVectors(bn,_s));if(h<0)return null;const u=l*this.direction.dot(dr.cross(bn));if(u<0||h+u>o)return null;const c=-l*bn.dot(mr);return c<0?null:this.at(c/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(t,e,i,s,a,o,l,h,u,c,f,p,m,g,_,x){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,l,h,u,c,f,p,m,g,_,x)}set(t,e,i,s,a,o,l,h,u,c,f,p,m,g,_,x){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=a,d[5]=o,d[9]=l,d[13]=h,d[2]=u,d[6]=c,d[10]=f,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ui.setFromMatrixColumn(t,0).length(),a=1/ui.setFromMatrixColumn(t,1).length(),o=1/ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,o=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s),c=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*c,m=o*f,g=l*c,_=l*f;e[0]=h*c,e[4]=-h*f,e[8]=u,e[1]=m+g*u,e[5]=p-_*u,e[9]=-l*h,e[2]=_-p*u,e[6]=g+m*u,e[10]=o*h}else if(t.order==="YXZ"){const p=h*c,m=h*f,g=u*c,_=u*f;e[0]=p+_*l,e[4]=g*l-m,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-l,e[2]=m*l-g,e[6]=_+p*l,e[10]=o*h}else if(t.order==="ZXY"){const p=h*c,m=h*f,g=u*c,_=u*f;e[0]=p-_*l,e[4]=-o*f,e[8]=g+m*l,e[1]=m+g*l,e[5]=o*c,e[9]=_-p*l,e[2]=-o*u,e[6]=l,e[10]=o*h}else if(t.order==="ZYX"){const p=o*c,m=o*f,g=l*c,_=l*f;e[0]=h*c,e[4]=g*u-m,e[8]=p*u+_,e[1]=h*f,e[5]=_*u+p,e[9]=m*u-g,e[2]=-u,e[6]=l*h,e[10]=o*h}else if(t.order==="YZX"){const p=o*h,m=o*u,g=l*h,_=l*u;e[0]=h*c,e[4]=_-p*f,e[8]=g*f+m,e[1]=f,e[5]=o*c,e[9]=-l*c,e[2]=-u*c,e[6]=m*f+g,e[10]=p-_*f}else if(t.order==="XZY"){const p=o*h,m=o*u,g=l*h,_=l*u;e[0]=h*c,e[4]=-f,e[8]=u*c,e[1]=p*f+_,e[5]=o*c,e[9]=m*f-g,e[2]=g*f-m,e[6]=l*c,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rc,t,ac)}lookAt(t,e,i){const s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),wn.crossVectors(i,Fe),wn.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),wn.crossVectors(i,Fe)),wn.normalize(),vs.crossVectors(Fe,wn),s[0]=wn.x,s[4]=vs.x,s[8]=Fe.x,s[1]=wn.y,s[5]=vs.y,s[9]=Fe.y,s[2]=wn.z,s[6]=vs.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],l=i[4],h=i[8],u=i[12],c=i[1],f=i[5],p=i[9],m=i[13],g=i[2],_=i[6],x=i[10],d=i[14],T=i[3],A=i[7],y=i[11],D=i[15],b=s[0],w=s[4],F=s[8],S=s[12],M=s[1],B=s[5],Y=s[9],n=s[13],N=s[2],G=s[6],k=s[10],W=s[14],O=s[3],tt=s[7],rt=s[11],mt=s[15];return a[0]=o*b+l*M+h*N+u*O,a[4]=o*w+l*B+h*G+u*tt,a[8]=o*F+l*Y+h*k+u*rt,a[12]=o*S+l*n+h*W+u*mt,a[1]=c*b+f*M+p*N+m*O,a[5]=c*w+f*B+p*G+m*tt,a[9]=c*F+f*Y+p*k+m*rt,a[13]=c*S+f*n+p*W+m*mt,a[2]=g*b+_*M+x*N+d*O,a[6]=g*w+_*B+x*G+d*tt,a[10]=g*F+_*Y+x*k+d*rt,a[14]=g*S+_*n+x*W+d*mt,a[3]=T*b+A*M+y*N+D*O,a[7]=T*w+A*B+y*G+D*tt,a[11]=T*F+A*Y+y*k+D*rt,a[15]=T*S+A*n+y*W+D*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],o=t[1],l=t[5],h=t[9],u=t[13],c=t[2],f=t[6],p=t[10],m=t[14],g=t[3],_=t[7],x=t[11],d=t[15];return g*(+a*h*f-s*u*f-a*l*p+i*u*p+s*l*m-i*h*m)+_*(+e*h*m-e*u*p+a*o*p-s*o*m+s*u*c-a*h*c)+x*(+e*u*f-e*l*m-a*o*f+i*o*m+a*l*c-i*u*c)+d*(-s*l*c-e*h*f+e*l*p+s*o*f-i*o*p+i*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8],f=t[9],p=t[10],m=t[11],g=t[12],_=t[13],x=t[14],d=t[15],T=f*x*u-_*p*u+_*h*m-l*x*m-f*h*d+l*p*d,A=g*p*u-c*x*u-g*h*m+o*x*m+c*h*d-o*p*d,y=c*_*u-g*f*u+g*l*m-o*_*m-c*l*d+o*f*d,D=g*f*h-c*_*h-g*l*p+o*_*p+c*l*x-o*f*x,b=e*T+i*A+s*y+a*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=T*w,t[1]=(_*p*a-f*x*a-_*s*m+i*x*m+f*s*d-i*p*d)*w,t[2]=(l*x*a-_*h*a+_*s*u-i*x*u-l*s*d+i*h*d)*w,t[3]=(f*h*a-l*p*a-f*s*u+i*p*u+l*s*m-i*h*m)*w,t[4]=A*w,t[5]=(c*x*a-g*p*a+g*s*m-e*x*m-c*s*d+e*p*d)*w,t[6]=(g*h*a-o*x*a-g*s*u+e*x*u+o*s*d-e*h*d)*w,t[7]=(o*p*a-c*h*a+c*s*u-e*p*u-o*s*m+e*h*m)*w,t[8]=y*w,t[9]=(g*f*a-c*_*a-g*i*m+e*_*m+c*i*d-e*f*d)*w,t[10]=(o*_*a-g*l*a+g*i*u-e*_*u-o*i*d+e*l*d)*w,t[11]=(c*l*a-o*f*a-c*i*u+e*f*u+o*i*m-e*l*m)*w,t[12]=D*w,t[13]=(c*_*s-g*f*s+g*i*p-e*_*p-c*i*x+e*f*x)*w,t[14]=(g*l*s-o*_*s-g*i*h+e*_*h+o*i*x-e*l*x)*w,t[15]=(o*f*s-c*l*s+c*i*h-e*f*h-o*i*p+e*l*p)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,o=t.x,l=t.y,h=t.z,u=a*o,c=a*l;return this.set(u*o+i,u*l-s*h,u*h+s*l,0,u*l+s*h,c*l+i,c*h-s*o,0,u*h-s*l,c*h+s*o,a*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,o){return this.set(1,i,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,o=e._y,l=e._z,h=e._w,u=a+a,c=o+o,f=l+l,p=a*u,m=a*c,g=a*f,_=o*c,x=o*f,d=l*f,T=h*u,A=h*c,y=h*f,D=i.x,b=i.y,w=i.z;return s[0]=(1-(_+d))*D,s[1]=(m+y)*D,s[2]=(g-A)*D,s[3]=0,s[4]=(m-y)*b,s[5]=(1-(p+d))*b,s[6]=(x+T)*b,s[7]=0,s[8]=(g+A)*w,s[9]=(x-T)*w,s[10]=(1-(p+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=ui.set(s[0],s[1],s[2]).length();const o=ui.set(s[4],s[5],s[6]).length(),l=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const u=1/a,c=1/o,f=1/l;return qe.elements[0]*=u,qe.elements[1]*=u,qe.elements[2]*=u,qe.elements[4]*=c,qe.elements[5]*=c,qe.elements[6]*=c,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,a,o,l=vn){const h=this.elements,u=2*a/(e-t),c=2*a/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s);let m,g;if(l===vn)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(l===$s)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=c,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,a,o,l=vn){const h=this.elements,u=1/(e-t),c=1/(i-s),f=1/(o-a),p=(e+t)*u,m=(i+s)*c;let g,_;if(l===vn)g=(o+a)*f,_=-2*f;else if(l===$s)g=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-p,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-m,h[2]=0,h[6]=0,h[10]=_,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ui=new P,qe=new Ft,rc=new P(0,0,0),ac=new P(1,1,1),wn=new P,vs=new P,Fe=new P,bo=new Ft,wo=new nn;class sn{constructor(t=0,e=0,i=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],o=s[4],l=s[8],h=s[1],u=s[5],c=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wo.setFromEuler(this),this.setFromQuaternion(wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oc=0;const Ro=new P,ci=new nn,fn=new Ft,Es=new P,Yi=new P,lc=new P,hc=new nn,Do=new P(1,0,0),Po=new P(0,1,0),Bo=new P(0,0,1),Lo={type:"added"},uc={type:"removed"},fi={type:"childadded",child:null},xr={type:"childremoved",child:null};class oe extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new P,e=new sn,i=new nn,s=new P(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Lt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Do,t)}rotateY(t){return this.rotateOnAxis(Po,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return Ro.copy(t).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Do,t)}translateY(t){return this.translateOnAxis(Po,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Es.copy(t):Es.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Yi,Es,this.up):fn.lookAt(Es,Yi,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(fn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lo),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uc),xr.child=t,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lo),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,lc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,hc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let u=0,c=h.length;u<c;u++){const f=h[u];a(t.shapes,f)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(a(t.materials,this.material[h]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];s.animations.push(a(t.animations,h))}}if(e){const l=o(t.geometries),h=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);l.length>0&&(i.geometries=l),h.length>0&&(i.materials=h),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(l){const h=[];for(const u in l){const c=l[u];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}oe.DEFAULT_UP=new P(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new P,pn=new P,gr=new P,dn=new P,pi=new P,di=new P,Fo=new P,_r=new P,vr=new P,Er=new P,Mr=new jt,yr=new jt,Sr=new jt;class Ze{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),je.subVectors(t,e),s.cross(je);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){je.subVectors(s,e),pn.subVectors(i,e),gr.subVectors(t,e);const o=je.dot(je),l=je.dot(pn),h=je.dot(gr),u=pn.dot(pn),c=pn.dot(gr),f=o*u-l*l;if(f===0)return a.set(0,0,0),null;const p=1/f,m=(u*h-l*c)*p,g=(o*c-l*h)*p;return a.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,i,s,a,o,l,h){return this.getBarycoord(t,e,i,s,dn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,dn.x),h.addScaledVector(o,dn.y),h.addScaledVector(l,dn.z),h)}static getInterpolatedAttribute(t,e,i,s,a,o){return Mr.setScalar(0),yr.setScalar(0),Sr.setScalar(0),Mr.fromBufferAttribute(t,e),yr.fromBufferAttribute(t,i),Sr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Mr,a.x),o.addScaledVector(yr,a.y),o.addScaledVector(Sr,a.z),o}static isFrontFacing(t,e,i,s){return je.subVectors(i,e),pn.subVectors(t,e),je.cross(pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let o,l;pi.subVectors(s,i),di.subVectors(a,i),_r.subVectors(t,i);const h=pi.dot(_r),u=di.dot(_r);if(h<=0&&u<=0)return e.copy(i);vr.subVectors(t,s);const c=pi.dot(vr),f=di.dot(vr);if(c>=0&&f<=c)return e.copy(s);const p=h*f-c*u;if(p<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(i).addScaledVector(pi,o);Er.subVectors(t,a);const m=pi.dot(Er),g=di.dot(Er);if(g>=0&&m<=g)return e.copy(a);const _=m*u-h*g;if(_<=0&&u>=0&&g<=0)return l=u/(u-g),e.copy(i).addScaledVector(di,l);const x=c*g-m*f;if(x<=0&&f-c>=0&&m-g>=0)return Fo.subVectors(a,s),l=(f-c)/(f-c+(m-g)),e.copy(s).addScaledVector(Fo,l);const d=1/(x+_+p);return o=_*d,l=p*d,e.copy(i).addScaledVector(pi,o).addScaledVector(di,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Ar(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Gt.workingColorSpace){if(t=Va(t,1),e=Nt(e,0,1),i=Nt(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=Ar(o,a,t+1/3),this.g=Ar(o,a,t),this.b=Ar(o,a,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const i=rh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Gt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Nt(ye.r*255,0,255))*65536+Math.round(Nt(ye.g*255,0,255))*256+Math.round(Nt(ye.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,s=ye.g,a=ye.b,o=Math.max(i,s,a),l=Math.min(i,s,a);let h,u;const c=(l+o)/2;if(l===o)h=0,u=0;else{const f=o-l;switch(u=c<=.5?f/(o+l):f/(2-o-l),o){case i:h=(s-a)/f+(s<a?6:0);break;case s:h=(a-i)/f+2;break;case a:h=(i-s)/f+4;break}h/=6}return t.h=h,t.s=u,t.l=c,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ve){Gt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,s=ye.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ms);const i=ns(Rn.h,Ms.h,e),s=ns(Rn.s,Ms.s,e),a=ns(Rn.l,Ms.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new At;At.NAMES=rh;let cc=0;class en extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Je(),this.name="",this.type="Material",this.blending=Si,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(i.blending=this.blending),this.side!==yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wr&&(i.blendSrc=this.blendSrc),this.blendDst!==Xr&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const o=[];for(const l in a){const h=a[l];delete h.metadata,o.push(h)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jn extends en{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new P,ys=new Rt;let fc=0;class we{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wa,this.updateRanges=[],this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ke(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ke(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ke(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ke(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ke(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),s=Jt(s,this.array),a=Jt(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}}class ah extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class oh extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Mn extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pc=0;const He=new Ft,Tr=new oe,mi=new P,Ie=new An,qi=new An,xe=new P;class an extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?oh:ah)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Lt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,i){return He.makeTranslation(t,e,i),this.applyMatrix4(He),this}scale(t,e,i){return He.makeScale(t,e,i),this.applyMatrix4(He),this}lookAt(t){return Tr.lookAt(t),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Ie.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const l=e[a];qi.setFromBufferAttribute(l),this.morphTargetsRelative?(xe.addVectors(Ie.min,qi.min),Ie.expandByPoint(xe),xe.addVectors(Ie.max,qi.max),Ie.expandByPoint(xe)):(Ie.expandByPoint(qi.min),Ie.expandByPoint(qi.max))}Ie.getCenter(i);let s=0;for(let a=0,o=t.count;a<o;a++)xe.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(xe));if(e)for(let a=0,o=e.length;a<o;a++){const l=e[a],h=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)xe.fromBufferAttribute(l,u),h&&(mi.fromBufferAttribute(t,u),xe.add(mi)),s=Math.max(s,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],h=[];for(let F=0;F<i.count;F++)l[F]=new P,h[F]=new P;const u=new P,c=new P,f=new P,p=new Rt,m=new Rt,g=new Rt,_=new P,x=new P;function d(F,S,M){u.fromBufferAttribute(i,F),c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),p.fromBufferAttribute(a,F),m.fromBufferAttribute(a,S),g.fromBufferAttribute(a,M),c.sub(u),f.sub(u),m.sub(p),g.sub(p);const B=1/(m.x*g.y-g.x*m.y);isFinite(B)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(B),x.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(B),l[F].add(_),l[S].add(_),l[M].add(_),h[F].add(x),h[S].add(x),h[M].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,S=T.length;F<S;++F){const M=T[F],B=M.start,Y=M.count;for(let n=B,N=B+Y;n<N;n+=3)d(t.getX(n+0),t.getX(n+1),t.getX(n+2))}const A=new P,y=new P,D=new P,b=new P;function w(F){D.fromBufferAttribute(s,F),b.copy(D);const S=l[F];A.copy(S),A.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(b,S);const B=y.dot(h[F])<0?-1:1;o.setXYZW(F,A.x,A.y,A.z,B)}for(let F=0,S=T.length;F<S;++F){const M=T[F],B=M.start,Y=M.count;for(let n=B,N=B+Y;n<N;n+=3)w(t.getX(n+0)),w(t.getX(n+1)),w(t.getX(n+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new P,a=new P,o=new P,l=new P,h=new P,u=new P,c=new P,f=new P;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),_=t.getX(p+1),x=t.getX(p+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),c.subVectors(o,a),f.subVectors(s,a),c.cross(f),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,x),l.add(c),h.add(c),u.add(c),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,h.x,h.y,h.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),c.subVectors(o,a),f.subVectors(s,a),c.cross(f),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(l,h){const u=l.array,c=l.itemSize,f=l.normalized,p=new u.constructor(h.length*c);let m=0,g=0;for(let _=0,x=h.length;_<x;_++){l.isInterleavedBufferAttribute?m=h[_]*l.data.stride+l.offset:m=h[_]*c;for(let d=0;d<c;d++)p[g++]=u[m++]}return new we(p,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,i=this.index.array,s=this.attributes;for(const l in s){const h=s[l],u=t(h,i);e.setAttribute(l,u)}const a=this.morphAttributes;for(const l in a){const h=[],u=a[l];for(let c=0,f=u.length;c<f;c++){const p=u[c],m=t(p,i);h.push(m)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const u=i[h];t.data.attributes[h]=u.toJSON(t.data)}const s={};let a=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],c=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];c.push(m.toJSON(t.data))}c.length>0&&(s[h]=c,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const a=t.morphAttributes;for(const u in a){const c=[],f=a[u];for(let p=0,m=f.length;p<m;p++)c.push(f[p].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Io=new Ft,Gn=new hs,Ss=new rn,Uo=new P,As=new P,Ts=new P,Cs=new P,Cr=new P,bs=new P,No=new P,ws=new P;class Ne extends oe{constructor(t=new an,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(a&&l){bs.set(0,0,0);for(let h=0,u=a.length;h<u;h++){const c=l[h],f=a[h];c!==0&&(Cr.fromBufferAttribute(f,t),o?bs.addScaledVector(Cr,c):bs.addScaledVector(Cr.sub(e),c))}e.add(bs)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(a),Gn.copy(t.ray).recast(t.near),!(Ss.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Ss,Uo)===null||Gn.origin.distanceToSquared(Uo)>(t.far-t.near)**2))&&(Io.copy(a).invert(),Gn.copy(t.ray).applyMatrix4(Io),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,i){let s;const a=this.geometry,o=this.material,l=a.index,h=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,f=a.attributes.normal,p=a.groups,m=a.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const x=p[g],d=o[x.materialIndex],T=Math.max(x.start,m.start),A=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let y=T,D=A;y<D;y+=3){const b=l.getX(y),w=l.getX(y+1),F=l.getX(y+2);s=Rs(this,d,t,i,u,c,f,b,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let x=g,d=_;x<d;x+=3){const T=l.getX(x),A=l.getX(x+1),y=l.getX(x+2);s=Rs(this,o,t,i,u,c,f,T,A,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const x=p[g],d=o[x.materialIndex],T=Math.max(x.start,m.start),A=Math.min(h.count,Math.min(x.start+x.count,m.start+m.count));for(let y=T,D=A;y<D;y+=3){const b=y,w=y+1,F=y+2;s=Rs(this,d,t,i,u,c,f,b,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(h.count,m.start+m.count);for(let x=g,d=_;x<d;x+=3){const T=x,A=x+1,y=x+2;s=Rs(this,o,t,i,u,c,f,T,A,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function dc(r,t,e,i,s,a,o,l){let h;if(t.side===Be?h=i.intersectTriangle(o,a,s,!0,l):h=i.intersectTriangle(s,a,o,t.side===yn,l),h===null)return null;ws.copy(l),ws.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(ws);return u<e.near||u>e.far?null:{distance:u,point:ws.clone(),object:r}}function Rs(r,t,e,i,s,a,o,l,h,u){r.getVertexPosition(l,As),r.getVertexPosition(h,Ts),r.getVertexPosition(u,Cs);const c=dc(r,t,e,i,As,Ts,Cs,No);if(c){const f=new P;Ze.getBarycoord(No,As,Ts,Cs,f),s&&(c.uv=Ze.getInterpolatedAttribute(s,l,h,u,f,new Rt)),a&&(c.uv1=Ze.getInterpolatedAttribute(a,l,h,u,f,new Rt)),o&&(c.normal=Ze.getInterpolatedAttribute(o,l,h,u,f,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const p={a:l,b:h,c:u,normal:new P,materialIndex:0};Ze.getNormal(As,Ts,Cs,p.normal),c.face=p,c.barycoord=f}return c}class us extends an{constructor(t=1,e=1,i=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:o};const l=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const h=[],u=[],c=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,i,e,t,o,a,0),g("z","y","x",1,-1,i,e,-t,o,a,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(c,3)),this.setAttribute("uv",new Mn(f,2));function g(_,x,d,T,A,y,D,b,w,F,S){const M=y/w,B=D/F,Y=y/2,n=D/2,N=b/2,G=w+1,k=F+1;let W=0,O=0;const tt=new P;for(let rt=0;rt<k;rt++){const mt=rt*B-n;for(let Mt=0;Mt<G;Mt++){const ne=Mt*M-Y;tt[_]=ne*T,tt[x]=mt*A,tt[d]=N,u.push(tt.x,tt.y,tt.z),tt[_]=0,tt[x]=0,tt[d]=b>0?1:-1,c.push(tt.x,tt.y,tt.z),f.push(Mt/w),f.push(1-rt/F),W+=1}}for(let rt=0;rt<F;rt++)for(let mt=0;mt<w;mt++){const Mt=p+mt+G*rt,ne=p+mt+G*(rt+1),j=p+(mt+1)+G*(rt+1),et=p+(mt+1)+G*rt;h.push(Mt,ne,et),h.push(ne,j,et),O+=6}l.addGroup(m,O,S),m+=O,p+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const s=r[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Te(r){const t={};for(let e=0;e<r.length;e++){const i=Fi(r[e]);for(const s in i)t[s]=i[s]}return t}function mc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function lh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const xc={clone:Fi,merge:Te};var gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends en{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gc,this.fragmentShader=_c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=mc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class hh extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new P,Oo=new Rt,ko=new Rt;class Ce extends hh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Li*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Oo,ko),e.subVectors(ko,Oo)}setViewOffset(t,e,i,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(es*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;a+=o.offsetX*s/h,e-=o.offsetY*i/u,s*=o.width/h,i*=o.height/u}const l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,gi=1;class vc extends oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ce(xi,gi,t,e);s.layers=this.layers,this.add(s);const a=new Ce(xi,gi,t,e);a.layers=this.layers,this.add(a);const o=new Ce(xi,gi,t,e);o.layers=this.layers,this.add(o);const l=new Ce(xi,gi,t,e);l.layers=this.layers,this.add(l);const h=new Ce(xi,gi,t,e);h.layers=this.layers,this.add(h);const u=new Ce(xi,gi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,o,l,h]=e;for(const u of e)this.remove(u);if(t===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,h,u,c]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,l),t.setRenderTarget(i,3,s),t.render(e,h),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(f,p,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class uh extends ge{constructor(t,e,i,s,a,o,l,h,u,c){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,i,s,a,o,l,h,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ec extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new us(5,5,5),a=new On({name:"CubemapFromEquirect",uniforms:Fi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:Un});a.uniforms.tEquirect.value=e;const o=new Ne(s,a),l=e.minFilter;return e.minFilter===_n&&(e.minFilter=Ue),new vc(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(a)}}class Qn extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mc={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,o=null;const l=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const x=e.getJointPose(_,i),d=this._getHandJoint(u,_);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&p>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Mc)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class yc extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wa,this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new P;class Wa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ke(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ke(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ke(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ke(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ke(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),s=Jt(s,this.array),a=Jt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zo=new P,Ho=new jt,Vo=new jt,Ac=new P,Go=new Ft,Ds=new P,wr=new rn,Wo=new Ft,Rr=new hs;class Tc extends Ne{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xo,this.bindMatrix=new Ft,this.bindMatrixInverse=new Ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ds),this.boundingBox.expandByPoint(Ds)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ds),this.boundingSphere.expandByPoint(Ds)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(s),t.ray.intersectsSphere(wr)!==!1&&(Wo.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(Wo),!(this.boundingBox!==null&&Rr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Rr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new jt,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;Ho.fromBufferAttribute(s.attributes.skinIndex,t),Vo.fromBufferAttribute(s.attributes.skinWeight,t),zo.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){const o=Vo.getComponent(a);if(o!==0){const l=Ho.getComponent(a);Go.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),e.addScaledVector(Ac.copy(zo).applyMatrix4(Go),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ch extends oe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fh extends ge{constructor(t=null,e=1,i=1,s,a,o,l,h,u=be,c=be,f,p){super(null,o,l,h,u,c,s,a,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xo=new Ft,Cc=new Ft;class Xa{constructor(t=[],e=[]){this.uuid=Je(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ft)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Ft;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,o=t.length;a<o;a++){const l=t[a]?t[a].matrixWorld:Cc;Xo.multiplyMatrices(l,e[a]),Xo.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Xa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new fh(e,t,t,Ge,$e);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const a=t.bones[i];let o=e[a];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),o=new ch),this.bones.push(o),this.boneInverses.push(new Ft().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,a=e.length;s<a;s++){const o=e[s];t.bones.push(o.uuid);const l=i[s];t.boneInverses.push(l.toArray())}return t}}class Ra extends we{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _i=new Ft,Yo=new Ft,Ps=[],qo=new An,bc=new Ft,ji=new Ne,Ki=new rn;class wc extends Ne{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ra(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bc)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,_i),qo.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(qo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,_i),Ki.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Ki)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,o=t*a+1;for(let l=0;l<i.length;l++)i[l]=s[o+l]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(i),t.ray.intersectsSphere(Ki)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,_i),Yo.multiplyMatrices(i,_i),ji.matrixWorld=Yo,ji.raycast(t,Ps);for(let o=0,l=Ps.length;o<l;o++){const h=Ps[o];h.instanceId=a,h.object=this,e.push(h)}Ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(s*this.count),s,this.count,Oa,$e));const a=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const l=this.geometry.morphTargetsRelative?1:1-o,h=s*t;a[h]=l,a.set(i,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dr=new P,Rc=new P,Dc=new Lt;class Bn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Dr.subVectors(i,e).cross(Rc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Dr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Dc.getNormalMatrix(t),s=this.coplanarPoint(Dr).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new rn,Bs=new P;class Ya{constructor(t=new Bn,e=new Bn,i=new Bn,s=new Bn,a=new Bn,o=new Bn){this.planes=[t,e,i,s,a,o]}set(t,e,i,s,a,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(a),l[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vn){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],h=s[3],u=s[4],c=s[5],f=s[6],p=s[7],m=s[8],g=s[9],_=s[10],x=s[11],d=s[12],T=s[13],A=s[14],y=s[15];if(i[0].setComponents(h-a,p-u,x-m,y-d).normalize(),i[1].setComponents(h+a,p+u,x+m,y+d).normalize(),i[2].setComponents(h+o,p+c,x+g,y+T).normalize(),i[3].setComponents(h-o,p-c,x-g,y-T).normalize(),i[4].setComponents(h-l,p-f,x-_,y-A).normalize(),e===vn)i[5].setComponents(h+l,p+f,x+_,y+A).normalize();else if(e===$s)i[5].setComponents(l,f,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ph extends en{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Js=new P,Qs=new P,jo=new Ft,Zi=new hs,Ls=new rn,Pr=new P,Ko=new P;class qa extends oe{constructor(t=new an,e=new ph){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Js.fromBufferAttribute(e,s-1),Qs.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Js.distanceTo(Qs);t.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=a,t.ray.intersectsSphere(Ls)===!1)return;jo.copy(s).invert(),Zi.copy(t.ray).applyMatrix4(jo);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,c=i.index,p=i.attributes.position;if(c!==null){const m=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=u){const d=c.getX(_),T=c.getX(_+1),A=Fs(this,t,Zi,h,d,T,_);A&&e.push(A)}if(this.isLineLoop){const _=c.getX(g-1),x=c.getX(m),d=Fs(this,t,Zi,h,_,x,g-1);d&&e.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=u){const d=Fs(this,t,Zi,h,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=Fs(this,t,Zi,h,g-1,m,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Fs(r,t,e,i,s,a,o){const l=r.geometry.attributes.position;if(Js.fromBufferAttribute(l,s),Qs.fromBufferAttribute(l,a),e.distanceSqToSegment(Js,Qs,Pr,Ko)>i)return;Pr.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Pr);if(!(u<t.near||u>t.far))return{distance:u,point:Ko.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Zo=new P,$o=new P;class Pc extends qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)Zo.fromBufferAttribute(e,s),$o.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zo.distanceTo($o);t.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bc extends qa{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class dh extends en{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jo=new Ft,Da=new hs,Is=new rn,Us=new P;class Lc extends oe{constructor(t=new an,e=new dh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(s),Is.radius+=a,t.ray.intersectsSphere(Is)===!1)return;Jo.copy(s).invert(),Da.copy(t.ray).applyMatrix4(Jo);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,_=m;g<_;g++){const x=u.getX(g);Us.fromBufferAttribute(f,x),Qo(Us,x,h,s,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=p,_=m;g<_;g++)Us.fromBufferAttribute(f,g),Qo(Us,g,h,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Qo(r,t,e,i,s,a,o){const l=Da.distanceSqToPoint(r);if(l<e){const h=new P;Da.closestPointToPoint(r,h),h.applyMatrix4(i);const u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;a.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class mh extends ge{constructor(t,e,i,s,a,o,l,h,u,c=Ai){if(c!==Ai&&c!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ai&&(i=ei),i===void 0&&c===Bi&&(i=Pi),super(null,s,a,o,l,h,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:be,this.minFilter=h!==void 0?h:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ga(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class er extends an{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,o=e/2,l=Math.floor(i),h=Math.floor(s),u=l+1,c=h+1,f=t/l,p=e/h,m=[],g=[],_=[],x=[];for(let d=0;d<c;d++){const T=d*p-o;for(let A=0;A<u;A++){const y=A*f-a;g.push(y,-T,0),_.push(0,0,1),x.push(A/l),x.push(1-d/h)}}for(let d=0;d<h;d++)for(let T=0;T<l;T++){const A=T+u*d,y=T+u*(d+1),D=T+1+u*(d+1),b=T+1+u*d;m.push(A,y,b),m.push(y,D,b)}this.setIndex(m),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.width,t.height,t.widthSegments,t.heightSegments)}}class ti extends en{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class on extends ti{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Fc extends en{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ic extends en{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ns(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Uc(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Nc(r){function t(s,a){return r[s]-r[a]}const e=r.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function tl(r,t,e){const i=r.length,s=new r.constructor(i);for(let a=0,o=0;o!==i;++a){const l=e[a]*t;for(let h=0;h!==t;++h)s[o++]=r[l+h]}return s}function xh(r,t,e,i){let s=1,a=r[0];for(;a!==void 0&&a[i]===void 0;)a=r[s++];if(a===void 0)return;let o=a[i];if(o!==void 0)if(Array.isArray(o))do o=a[i],o!==void 0&&(t.push(a.time),e.push(...o)),a=r[s++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[i],o!==void 0&&(t.push(a.time),o.toArray(e,e.length)),a=r[s++];while(a!==void 0);else do o=a[i],o!==void 0&&(t.push(a.time),e.push(o)),a=r[s++];while(a!==void 0)}class cs{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],a=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(a=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=a)){const l=e[1];t<l&&(i=2,a=l);for(let h=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=a,a=e[--i-1],t>=a)break t}o=i,i=0;break e}break n}for(;i<o;){const l=i+o>>>1;t<e[l]?o=l:i=l+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let o=0;o!==s;++o)e[o]=i[a+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Oc extends cs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:go,endingEnd:go}}intervalChanged_(t,e,i){const s=this.parameterPositions;let a=t-2,o=t+1,l=s[a],h=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case _o:a=t,l=2*e-i;break;case vo:a=s.length-2,l=e+s[a]-s[a+1];break;default:a=t,l=i}if(h===void 0)switch(this.getSettings_().endingEnd){case _o:o=t,h=2*i-e;break;case vo:o=1,h=i+s[1]-s[0];break;default:o=t-1,h=e}const u=(i-e)*.5,c=this.valueSize;this._weightPrev=u/(e-l),this._weightNext=u/(h-i),this._offsetPrev=a*c,this._offsetNext=o*c}interpolate_(t,e,i,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,c=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),_=g*g,x=_*g,d=-p*x+2*p*_-p*g,T=(1+p)*x+(-1.5-2*p)*_+(-.5+p)*g+1,A=(-1-m)*x+(1.5+m)*_+.5*g,y=m*x-m*_;for(let D=0;D!==l;++D)a[D]=d*o[c+D]+T*o[u+D]+A*o[h+D]+y*o[f+D];return a}}class kc extends cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,c=(i-e)/(s-e),f=1-c;for(let p=0;p!==l;++p)a[p]=o[u+p]*f+o[h+p]*c;return a}}class zc extends cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ln{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rs:e=this.InterpolantFactoryMethodDiscrete;break;case as:e=this.InterpolantFactoryMethodLinear;break;case or:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return as;case this.InterpolantFactoryMethodSmooth:return or}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let a=0,o=s-1;for(;a!==s&&i[a]<t;)++a;for(;o!==-1&&i[o]>e;)--o;if(++o,a!==0||o!==s){a>=o&&(o=Math.max(o,1),a=o-1);const l=this.getValueSize();this.times=i.slice(a,o),this.values=this.values.slice(a*l,o*l)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==a;l++){const h=i[l];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,h),t=!1;break}if(o!==null&&o>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,h,o),t=!1;break}o=h}if(s!==void 0&&Uc(s))for(let l=0,h=s.length;l!==h;++l){const u=s[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===or,a=t.length-1;let o=1;for(let l=1;l<a;++l){let h=!1;const u=t[l],c=t[l+1];if(u!==c&&(l!==1||u!==t[0]))if(s)h=!0;else{const f=l*i,p=f-i,m=f+i;for(let g=0;g!==i;++g){const _=e[f+g];if(_!==e[p+g]||_!==e[m+g]){h=!0;break}}}if(h){if(l!==o){t[o]=t[l];const f=l*i,p=o*i;for(let m=0;m!==i;++m)e[p+m]=e[f+m]}++o}}if(a>0){t[o]=t[a];for(let l=a*i,h=o*i,u=0;u!==i;++u)e[h+u]=e[l+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=as;class Oi extends ln{constructor(t,e,i){super(t,e,i)}}Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=rs;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class gh extends ln{}gh.prototype.ValueTypeName="color";class Ii extends ln{}Ii.prototype.ValueTypeName="number";class Hc extends cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,h=(i-e)/(s-e);let u=t*l;for(let c=u+l;u!==c;u+=4)nn.slerpFlat(a,0,o,u-l,o,u,h);return a}}class Ui extends ln{InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}}Ui.prototype.ValueTypeName="quaternion";Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class ki extends ln{constructor(t,e,i){super(t,e,i)}}ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=rs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Ni extends ln{}Ni.prototype.ValueTypeName="vector";class Vc{constructor(t="",e=-1,i=[],s=Eu){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=Je(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let o=0,l=i.length;o!==l;++o)e.push(Wc(i[o]).scale(s));const a=new this(t.name,t.duration,e,t.blendMode);return a.uuid=t.uuid,a}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let a=0,o=i.length;a!==o;++a)e.push(ln.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const a=e.length,o=[];for(let l=0;l<a;l++){let h=[],u=[];h.push((l+a-1)%a,l,(l+1)%a),u.push(0,1,0);const c=Nc(h);h=tl(h,1,c),u=tl(u,1,c),!s&&h[0]===0&&(h.push(a),u.push(u[0])),o.push(new Ii(".morphTargetInfluences["+e[l].name+"]",h,u).scale(1/i))}return new this(t,-1,o)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let l=0,h=t.length;l<h;l++){const u=t[l],c=u.name.match(a);if(c&&c.length>1){const f=c[1];let p=s[f];p||(s[f]=p=[]),p.push(u)}}const o=[];for(const l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],e,i));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,p,m,g,_){if(m.length!==0){const x=[],d=[];xh(m,x,d,g),x.length!==0&&_.push(new f(p,x,d))}},s=[],a=t.name||"default",o=t.fps||30,l=t.blendMode;let h=t.length||-1;const u=t.hierarchy||[];for(let f=0;f<u.length;f++){const p=u[f].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const m={};let g;for(g=0;g<p.length;g++)if(p[g].morphTargets)for(let _=0;_<p[g].morphTargets.length;_++)m[p[g].morphTargets[_]]=-1;for(const _ in m){const x=[],d=[];for(let T=0;T!==p[g].morphTargets.length;++T){const A=p[g];x.push(A.time),d.push(A.morphTarget===_?1:0)}s.push(new Ii(".morphTargetInfluence["+_+"]",x,d))}h=m.length*o}else{const m=".bones["+e[f].name+"]";i(Ni,m+".position",p,"pos",s),i(Ui,m+".quaternion",p,"rot",s),i(Ni,m+".scale",p,"scl",s)}}return s.length===0?null:new this(a,h,s,l)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const a=this.tracks[i];e=Math.max(e,a.times[a.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Gc(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return gh;case"quaternion":return Ui;case"bool":case"boolean":return Oi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Wc(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Gc(r.type);if(r.times===void 0){const e=[],i=[];xh(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const In={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Xc{constructor(t,e,i){const s=this;let a=!1,o=0,l=0,h;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){l++,a===!1&&s.onStart!==void 0&&s.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,l),o===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,p=u.length;f<p;f+=2){const m=u[f],g=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const Yc=new Xc;class zi{constructor(t){this.manager=t!==void 0?t:Yc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zi.DEFAULT_MATERIAL_NAME="__DEFAULT";const mn={};class qc extends Error{constructor(t,e){super(t),this.response=e}}class _h extends zi{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=In.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(mn[t]!==void 0){mn[t].push({onLoad:e,onProgress:i,onError:s});return}mn[t]=[],mn[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=mn[t],f=u.body.getReader(),p=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let _=0;const x=new ReadableStream({start(d){T();function T(){f.read().then(({done:A,value:y})=>{if(A)d.close();else{_+=y.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let b=0,w=c.length;b<w;b++){const F=c[b];F.onProgress&&F.onProgress(D)}d.enqueue(y),T()}},A=>{d.error(A)})}}});return new Response(x)}else throw new qc(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(h){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,l));case"json":return u.json();default:if(l===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return u.arrayBuffer().then(g=>m.decode(g))}}}).then(u=>{In.add(t,u);const c=mn[t];delete mn[t];for(let f=0,p=c.length;f<p;f++){const m=c[f];m.onLoad&&m.onLoad(u)}}).catch(u=>{const c=mn[t];if(c===void 0)throw this.manager.itemError(t),u;delete mn[t];for(let f=0,p=c.length;f<p;f++){const m=c[f];m.onError&&m.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class jc extends zi{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,o=In.get(t);if(o!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o;const l=os("img");function h(){c(),In.add(t,this),e&&e(this),a.manager.itemEnd(t)}function u(f){c(),s&&s(f),a.manager.itemError(t),a.manager.itemEnd(t)}function c(){l.removeEventListener("load",h,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(t),l.src=t,l}}class Kc extends zi{constructor(t){super(t)}load(t,e,i,s){const a=new ge,o=new jc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(l){a.image=l,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class nr extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Br=new Ft,el=new P,nl=new P;class ja{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),Br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zc extends ja{constructor(){super(new Ce(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Li*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(i!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=i,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class $c extends nr{constructor(t,e,i=0,s=Math.PI/3,a=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.distance=i,this.angle=s,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const il=new Ft,$i=new P,Lr=new P;class Jc extends ja{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),$i.setFromMatrixPosition(t.matrixWorld),i.position.copy($i),Lr.copy(i.position),Lr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Lr),i.updateMatrixWorld(),s.makeTranslation(-$i.x,-$i.y,-$i.z),il.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il)}}class Qc extends nr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ka extends hh{constructor(t=-1,e=1,i=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,o=i+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tf extends ja{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new tf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ef extends nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class is{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,s=t.length;i<s;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class nf extends zi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,o=In.get(t);if(o!==void 0){if(a.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),a.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const h=fetch(t,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(u){return In.add(t,u),e&&e(u),a.manager.itemEnd(t),u}).catch(function(u){s&&s(u),In.remove(t),a.manager.itemError(t),a.manager.itemEnd(t)});In.add(t,h),a.manager.itemStart(t)}}class sf extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const Za="\\[\\]\\.:\\/",rf=new RegExp("["+Za+"]","g"),$a="[^"+Za+"]",af="[^"+Za.replace("\\.","")+"]",of=/((?:WC+[\/:])*)/.source.replace("WC",$a),lf=/(WCOD+)?/.source.replace("WCOD",af),hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$a),uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$a),cf=new RegExp("^"+of+lf+hf+uf+"$"),ff=["material","materials","bones","map"];class pf{constructor(t,e,i){const s=i||Qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class Qt{constructor(t,e,i){this.path=e,this.parsedPath=i||Qt.parseTrackName(e),this.node=Qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Qt.Composite(t,e,i):new Qt(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rf,"")}static parseTrackName(t){const e=cf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);ff.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(a){for(let o=0;o<a.length;o++){const l=a[o];if(l.name===e||l.uuid===e)return l;const h=i(l.children);if(h)return h}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let a=e.propertyIndex;if(t||(t=Qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=pf;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Nt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class df extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function rl(r,t,e,i){const s=mf(i);switch(e){case Yl:return r*t;case jl:return r*t;case Kl:return r*t*2;case Oa:return r*t/s.components*s.byteLength;case ka:return r*t/s.components*s.byteLength;case Zl:return r*t*2/s.components*s.byteLength;case za:return r*t*2/s.components*s.byteLength;case ql:return r*t*3/s.components*s.byteLength;case Ge:return r*t*4/s.components*s.byteLength;case Ha:return r*t*4/s.components*s.byteLength;case Gs:case Ws:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(r,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(r,8)*Math.max(t,8)/2;case ra:case aa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case da:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ma:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ga:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case va:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qs:case ya:case Sa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case $l:case Aa:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ta:case Ca:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mf(r){switch(r){case Sn:case Gl:return{byteLength:1,components:1};case ss:case Wl:case ls:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case ei:case Ia:case $e:return{byteLength:4,components:1};case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eh(){let r=null,t=!1,e=null,i=null;function s(a,o){e(a,o),i=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function xf(r){const t=new WeakMap;function e(l,h){const u=l.array,c=l.usage,f=u.byteLength,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,c),l.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,h,u){const c=h.array,f=h.updateRanges;if(r.bindBuffer(u,l),f.length===0)r.bufferSubData(u,0,c);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){const g=f[p],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];r.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(r.deleteBuffer(h.buffer),t.delete(l))}function o(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=t.get(l);if(u===void 0)t.set(l,e(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,h),u.version=l.version}}return{get:s,remove:a,update:o}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ad=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Td=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Id=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:Ef,alphatest_fragment:Mf,alphatest_pars_fragment:yf,aomap_fragment:Sf,aomap_pars_fragment:Af,batching_pars_vertex:Tf,batching_vertex:Cf,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:Rf,iridescence_fragment:Df,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:If,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Of,color_vertex:kf,common:zf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:Yf,colorspace_fragment:qf,colorspace_pars_fragment:jf,envmap_fragment:Kf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:$f,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:hp,envmap_vertex:Qf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:up,lights_toon_pars_fragment:cp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:dp,lights_physical_pars_fragment:mp,lights_fragment_begin:xp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:yp,map_fragment:Sp,map_pars_fragment:Ap,map_particle_fragment:Tp,map_particle_pars_fragment:Cp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Rp,morphcolor_vertex:Dp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Bp,morphtarget_vertex:Lp,normal_fragment_begin:Fp,normal_fragment_maps:Ip,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Op,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Gp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:Yp,project_vertex:qp,dithering_fragment:jp,dithering_pars_fragment:Kp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:td,shadowmask_pars_fragment:ed,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:sd,skinnormal_vertex:rd,specularmap_fragment:ad,specularmap_pars_fragment:od,tonemapping_fragment:ld,tonemapping_pars_fragment:hd,transmission_fragment:ud,transmission_pars_fragment:cd,uv_pars_fragment:fd,uv_pars_vertex:pd,uv_vertex:dd,worldpos_vertex:md,background_vert:xd,background_frag:gd,backgroundCube_vert:_d,backgroundCube_frag:vd,cube_vert:Ed,cube_frag:Md,depth_vert:yd,depth_frag:Sd,distanceRGBA_vert:Ad,distanceRGBA_frag:Td,equirect_vert:Cd,equirect_frag:bd,linedashed_vert:wd,linedashed_frag:Rd,meshbasic_vert:Dd,meshbasic_frag:Pd,meshlambert_vert:Bd,meshlambert_frag:Ld,meshmatcap_vert:Fd,meshmatcap_frag:Id,meshnormal_vert:Ud,meshnormal_frag:Nd,meshphong_vert:Od,meshphong_frag:kd,meshphysical_vert:zd,meshphysical_frag:Hd,meshtoon_vert:Vd,meshtoon_frag:Gd,points_vert:Wd,points_frag:Xd,shadow_vert:Yd,shadow_frag:qd,sprite_vert:jd,sprite_frag:Kd},nt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Qe={basic:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new At(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Te([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Te([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new At(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Te([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Te([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Te([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Te([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Te([nt.common,nt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Te([nt.lights,nt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Qe.physical={uniforms:Te([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Os={r:0,b:0,g:0},Xn=new sn,Zd=new Ft;function $d(r,t,e,i,s,a,o){const l=new At(0);let h=a===!0?0:1,u,c,f=null,p=0,m=null;function g(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?e:t).get(y)),y}function _(A){let y=!1;const D=g(A);D===null?d(l,h):D&&D.isColor&&(d(D,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(A,y){const D=g(y);D&&(D.isCubeTexture||D.mapping===tr)?(c===void 0&&(c=new Ne(new us(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Fi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Xn.copy(y.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),c.material.uniforms.envMap.value=D,c.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(Xn)),c.material.toneMapped=Gt.getTransfer(D.colorSpace)!==te,(f!==D||p!==D.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=D,p=D.version,m=r.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new Ne(new er(2,2),new On({name:"BackgroundMaterial",uniforms:Fi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Gt.getTransfer(D.colorSpace)!==te,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||p!==D.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=D,p=D.version,m=r.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,y){A.getRGB(Os,lh(r)),i.buffers.color.setClear(Os.r,Os.g,Os.b,y,o)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(A,y=1){l.set(A),h=y,d(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,d(l,h)},render:_,addToRenderList:x,dispose:T}}function Jd(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=p(null);let a=s,o=!1;function l(M,B,Y,n,N){let G=!1;const k=f(n,Y,B);a!==k&&(a=k,u(a.object)),G=m(M,n,Y,N),G&&g(M,n,Y,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(M,B,Y,n),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return r.createVertexArray()}function u(M){return r.bindVertexArray(M)}function c(M){return r.deleteVertexArray(M)}function f(M,B,Y){const n=Y.wireframe===!0;let N=i[M.id];N===void 0&&(N={},i[M.id]=N);let G=N[B.id];G===void 0&&(G={},N[B.id]=G);let k=G[n];return k===void 0&&(k=p(h()),G[n]=k),k}function p(M){const B=[],Y=[],n=[];for(let N=0;N<e;N++)B[N]=0,Y[N]=0,n[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:n,object:M,attributes:{},index:null}}function m(M,B,Y,n){const N=a.attributes,G=B.attributes;let k=0;const W=Y.getAttributes();for(const O in W)if(W[O].location>=0){const rt=N[O];let mt=G[O];if(mt===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),rt===void 0||rt.attribute!==mt||mt&&rt.data!==mt.data)return!0;k++}return a.attributesNum!==k||a.index!==n}function g(M,B,Y,n){const N={},G=B.attributes;let k=0;const W=Y.getAttributes();for(const O in W)if(W[O].location>=0){let rt=G[O];rt===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const mt={};mt.attribute=rt,rt&&rt.data&&(mt.data=rt.data),N[O]=mt,k++}a.attributes=N,a.attributesNum=k,a.index=n}function _(){const M=a.newAttributes;for(let B=0,Y=M.length;B<Y;B++)M[B]=0}function x(M){d(M,0)}function d(M,B){const Y=a.newAttributes,n=a.enabledAttributes,N=a.attributeDivisors;Y[M]=1,n[M]===0&&(r.enableVertexAttribArray(M),n[M]=1),N[M]!==B&&(r.vertexAttribDivisor(M,B),N[M]=B)}function T(){const M=a.newAttributes,B=a.enabledAttributes;for(let Y=0,n=B.length;Y<n;Y++)B[Y]!==M[Y]&&(r.disableVertexAttribArray(Y),B[Y]=0)}function A(M,B,Y,n,N,G,k){k===!0?r.vertexAttribIPointer(M,B,Y,N,G):r.vertexAttribPointer(M,B,Y,n,N,G)}function y(M,B,Y,n){_();const N=n.attributes,G=Y.getAttributes(),k=B.defaultAttributeValues;for(const W in G){const O=G[W];if(O.location>=0){let tt=N[W];if(tt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const rt=tt.normalized,mt=tt.itemSize,Mt=t.get(tt);if(Mt===void 0)continue;const ne=Mt.buffer,j=Mt.type,et=Mt.bytesPerElement,xt=j===r.INT||j===r.UNSIGNED_INT||tt.gpuType===Ia;if(tt.isInterleavedBufferAttribute){const at=tt.data,St=at.stride,qt=tt.offset;if(at.isInstancedInterleavedBuffer){for(let Ct=0;Ct<O.locationSize;Ct++)d(O.location+Ct,at.meshPerAttribute);M.isInstancedMesh!==!0&&n._maxInstanceCount===void 0&&(n._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ct=0;Ct<O.locationSize;Ct++)x(O.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let Ct=0;Ct<O.locationSize;Ct++)A(O.location+Ct,mt/O.locationSize,j,rt,St*et,(qt+mt/O.locationSize*Ct)*et,xt)}else{if(tt.isInstancedBufferAttribute){for(let at=0;at<O.locationSize;at++)d(O.location+at,tt.meshPerAttribute);M.isInstancedMesh!==!0&&n._maxInstanceCount===void 0&&(n._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let at=0;at<O.locationSize;at++)x(O.location+at);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let at=0;at<O.locationSize;at++)A(O.location+at,mt/O.locationSize,j,rt,mt*et,mt/O.locationSize*at*et,xt)}}else if(k!==void 0){const rt=k[W];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(O.location,rt);break;case 3:r.vertexAttrib3fv(O.location,rt);break;case 4:r.vertexAttrib4fv(O.location,rt);break;default:r.vertexAttrib1fv(O.location,rt)}}}}T()}function D(){F();for(const M in i){const B=i[M];for(const Y in B){const n=B[Y];for(const N in n)c(n[N].object),delete n[N];delete B[Y]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const B=i[M.id];for(const Y in B){const n=B[Y];for(const N in n)c(n[N].object),delete n[N];delete B[Y]}delete i[M.id]}function w(M){for(const B in i){const Y=i[B];if(Y[M.id]===void 0)continue;const n=Y[M.id];for(const N in n)c(n[N].object),delete n[N];delete Y[M.id]}}function F(){S(),o=!0,a!==s&&(a=s,u(a.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function Qd(r,t,e){let i;function s(u){i=u}function a(u,c){r.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(r.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function l(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];e.update(m,i,1)}function h(u,c,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)o(u[g],c[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*p[_];e.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function tm(r,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Ge&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const F=w===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Sn&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$e&&!F)}function h(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=h(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:D,maxSamples:b}}function em(r){const t=this;let e=null,i=0,s=!1,a=!1;const o=new Bn,l=new Lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=c(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,d=r.get(f);if(!s||g===null||g.length===0||a&&!x)a?c(null):u();else{const T=a?0:i,A=T*4;let y=d.clippingState||null;h.value=y,y=c(g,p,A,m);for(let D=0;D!==A;++D)y[D]=e[D];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,p,m,g){const _=f!==null?f.length:0;let x=null;if(_!==0){if(x=h.value,g!==!0||x===null){const d=m+_*4,T=p.matrixWorldInverse;l.getNormalMatrix(T),(x===null||x.length<d)&&(x=new Float32Array(d));for(let A=0,y=m;A!==_;++A,y+=4)o.copy(f[A]).applyMatrix4(T,l),o.normal.toArray(x,y),x[y+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}function nm(r){let t=new WeakMap;function e(o,l){return l===Qr?o.mapping=wi:l===ta&&(o.mapping=Ri),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===Qr||l===ta)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const u=new Ec(h.height);return u.fromEquirectangularTexture(r,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const Mi=4,al=[.125,.215,.35,.446,.526,.582],$n=20,Fr=new Ka,ol=new At;let Ir=null,Ur=0,Nr=0,Or=!1;const Kn=(1+Math.sqrt(5))/2,vi=1/Kn,ll=[new P(-Kn,vi,0),new P(Kn,vi,0),new P(-vi,0,Kn),new P(vi,0,Kn),new P(0,Kn,-vi),new P(0,Kn,vi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],im=new P;class hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,a={}){const{size:o=256,position:l=im}=a;Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Ur,Nr),this._renderer.xr.enabled=Or,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:ls,format:Ge,colorSpace:Re,depthBuffer:!1},s=ul(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(a)),this._blurMaterial=rm(a,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,i,s,a){const h=new Ce(90,1,e,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(ol),f.toneMapping=Nn,f.autoClear=!1;const g=new Jn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new Ne(new us,g);let x=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,x=!0):(g.color.copy(ol),x=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(h.up.set(0,u[T],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+c[T],a.y,a.z)):A===1?(h.up.set(0,0,u[T]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+c[T],a.z)):(h.up.set(0,u[T],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+c[T]));const y=this._cubeSize;ks(s,A*y,T>2?y:0,y,y),f.setRenderTarget(s),x&&f.render(_,h),f.render(t,h)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=p,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===wi||t.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=t;const h=this._cubeSize;ks(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(o,Fr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=ll[(s-a-1)%ll.length];this._blur(t,a-1,a,o,l)}e.autoClear=i}_blur(t,e,i,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",a),this._halfBlur(o,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,o,l){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ne(this._lodPlanes[s],u),p=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*$n-1),_=a/g,x=isFinite(a)?1+Math.floor(c*_):$n;x>$n&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$n}`);const d=[];let T=0;for(let w=0;w<$n;++w){const F=w/_,S=Math.exp(-F*F/2);d.push(S),w===0?T+=S:w<x&&(T+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/T;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=d,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:A}=this;p.dTheta.value=g,p.mipInt.value=A-i;const y=this._sizeLods[s],D=3*y*(s>A-Mi?s-A+Mi:0),b=4*(this._cubeSize-y);ks(e,D,b,3*y,2*y),h.setRenderTarget(e),h.render(f,Fr)}}function sm(r){const t=[],e=[],i=[];let s=r;const a=r-Mi+1+al.length;for(let o=0;o<a;o++){const l=Math.pow(2,s);e.push(l);let h=1/l;o>r-Mi?h=al[o-r+Mi-1]:o===0&&(h=0),i.push(h);const u=1/(l-2),c=-u,f=1+u,p=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,_=3,x=2,d=1,T=new Float32Array(_*g*m),A=new Float32Array(x*g*m),y=new Float32Array(d*g*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,F=b>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];T.set(S,_*g*b),A.set(p,x*g*b);const M=[b,b,b,b,b,b];y.set(M,d*g*b)}const D=new an;D.setAttribute("position",new we(T,_)),D.setAttribute("uv",new we(A,x)),D.setAttribute("faceIndex",new we(y,d)),t.push(D),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ul(r,t,e){const i=new ni(r,t,e);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(r,t,e,i,s){r.viewport.set(t,e,i,s),r.scissor.set(t,e,i,s)}function rm(r,t,e){const i=new Float32Array($n),s=new P(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function cl(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function fl(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function am(r){let t=new WeakMap,e=null;function i(l){if(l&&l.isTexture){const h=l.mapping,u=h===Qr||h===ta,c=h===wi||h===Ri;if(u||c){let f=t.get(l);const p=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return e===null&&(e=new hl(r)),f=u?e.fromEquirectangular(l,f):e.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),f.texture;if(f!==void 0)return f.texture;{const m=l.image;return u&&m&&m.height>0||c&&m&&s(m)?(e===null&&(e=new hl(r)),f=u?e.fromEquirectangular(l):e.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),l.addEventListener("dispose",a),f.texture):null}}}return l}function s(l){let h=0;const u=6;for(let c=0;c<u;c++)l[c]!==void 0&&h++;return h===u}function a(l){const h=l.target;h.removeEventListener("dispose",a);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function om(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&jn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lm(r,t,e,i){const s={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const m=a.get(p);m&&(t.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function h(f){const p=f.attributes;for(const m in p)t.update(p[m],r.ARRAY_BUFFER)}function u(f){const p=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let A=0,y=T.length;A<y;A+=3){const D=T[A+0],b=T[A+1],w=T[A+2];p.push(D,b,b,w,w,D)}}else if(g!==void 0){const T=g.array;_=g.version;for(let A=0,y=T.length/3-1;A<y;A+=3){const D=A+0,b=A+1,w=A+2;p.push(D,b,b,w,w,D)}}else return;const x=new(nh(p)?oh:ah)(p,1);x.version=_;const d=a.get(f);d&&t.remove(d),a.set(f,x)}function c(f){const p=a.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return a.get(f)}return{get:l,update:h,getWireframeAttribute:c}}function hm(r,t,e){let i;function s(p){i=p}let a,o;function l(p){a=p.type,o=p.bytesPerElement}function h(p,m){r.drawElements(i,m,a,p*o),e.update(m,i,1)}function u(p,m,g){g!==0&&(r.drawElementsInstanced(i,m,a,p*o,g),e.update(m,i,g))}function c(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,p,0,g);let x=0;for(let d=0;d<g;d++)x+=m[d];e.update(x,i,1)}function f(p,m,g,_){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<p.length;d++)u(p[d]/o,m[d],_[d]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,a,p,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=m[T]*_[T];e.update(d,i,1)}}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function um(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,l){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=l*(a/3);break;case r.LINES:e.lines+=l*(a/2);break;case r.LINE_STRIP:e.lines+=l*(a-1);break;case r.LINE_LOOP:e.lines+=l*a;break;case r.POINTS:e.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function cm(r,t,e){const i=new WeakMap,s=new jt;function a(o,l,h){const u=o.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=c!==void 0?c.length:0;let p=i.get(l);if(p===void 0||p.count!==f){let S=function(){w.dispose(),i.delete(l),l.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const m=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let A=0;m===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let y=l.attributes.position.count*A,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*D*4*f),w=new ih(b,y,D,f);w.type=$e,w.needsUpdate=!0;const F=A*4;for(let M=0;M<f;M++){const B=x[M],Y=d[M],n=T[M],N=y*D*4*M;for(let G=0;G<B.count;G++){const k=G*F;m===!0&&(s.fromBufferAttribute(B,G),b[N+k+0]=s.x,b[N+k+1]=s.y,b[N+k+2]=s.z,b[N+k+3]=0),g===!0&&(s.fromBufferAttribute(Y,G),b[N+k+4]=s.x,b[N+k+5]=s.y,b[N+k+6]=s.z,b[N+k+7]=0),_===!0&&(s.fromBufferAttribute(n,G),b[N+k+8]=s.x,b[N+k+9]=s.y,b[N+k+10]=s.z,b[N+k+11]=n.itemSize===4?s.w:1)}}p={count:f,texture:w,size:new Rt(y,D)},i.set(l,p),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];const g=l.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",g),h.getUniforms().setValue(r,"morphTargetInfluences",u)}h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:a}}function fm(r,t,e,i){let s=new WeakMap;function a(h){const u=i.render.frame,c=h.geometry,f=t.get(h,c);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==u&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,u))),h.isSkinnedMesh){const p=h.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(h){const u=h.target;u.removeEventListener("dispose",l),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Mh=new ge,pl=new mh(1,1),yh=new ih,Sh=new ic,Ah=new uh,dl=[],ml=[],xl=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Hi(r,t,e){const i=r[0];if(i<=0||i>0)return r;const s=t*e;let a=dl[s];if(a===void 0&&(a=new Float32Array(s),dl[s]=a),t!==0){i.toArray(a,0);for(let o=1,l=0;o!==t;++o)l+=e,r[o].toArray(a,l)}return a}function de(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function me(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function ir(r,t){let e=ml[t];e===void 0&&(e=new Int32Array(t),ml[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function pm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function dm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2fv(this.addr,t),me(e,t)}}function mm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;r.uniform3fv(this.addr,t),me(e,t)}}function xm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4fv(this.addr,t),me(e,t)}}function gm(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(de(e,i))return;_l.set(i),r.uniformMatrix2fv(this.addr,!1,_l),me(e,i)}}function _m(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(de(e,i))return;gl.set(i),r.uniformMatrix3fv(this.addr,!1,gl),me(e,i)}}function vm(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(de(e,i))return;xl.set(i),r.uniformMatrix4fv(this.addr,!1,xl),me(e,i)}}function Em(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Mm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2iv(this.addr,t),me(e,t)}}function ym(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3iv(this.addr,t),me(e,t)}}function Sm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4iv(this.addr,t),me(e,t)}}function Am(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Tm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2uiv(this.addr,t),me(e,t)}}function Cm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3uiv(this.addr,t),me(e,t)}}function bm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4uiv(this.addr,t),me(e,t)}}function wm(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(pl.compareFunction=th,a=pl):a=Mh,e.setTexture2D(t||a,s)}function Rm(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Sh,s)}function Dm(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ah,s)}function Pm(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yh,s)}function Bm(r){switch(r){case 5126:return pm;case 35664:return dm;case 35665:return mm;case 35666:return xm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return Em;case 35667:case 35671:return Mm;case 35668:case 35672:return ym;case 35669:case 35673:return Sm;case 5125:return Am;case 36294:return Tm;case 36295:return Cm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Lm(r,t){r.uniform1fv(this.addr,t)}function Fm(r,t){const e=Hi(t,this.size,2);r.uniform2fv(this.addr,e)}function Im(r,t){const e=Hi(t,this.size,3);r.uniform3fv(this.addr,e)}function Um(r,t){const e=Hi(t,this.size,4);r.uniform4fv(this.addr,e)}function Nm(r,t){const e=Hi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Om(r,t){const e=Hi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function km(r,t){const e=Hi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function zm(r,t){r.uniform1iv(this.addr,t)}function Hm(r,t){r.uniform2iv(this.addr,t)}function Vm(r,t){r.uniform3iv(this.addr,t)}function Gm(r,t){r.uniform4iv(this.addr,t)}function Wm(r,t){r.uniform1uiv(this.addr,t)}function Xm(r,t){r.uniform2uiv(this.addr,t)}function Ym(r,t){r.uniform3uiv(this.addr,t)}function qm(r,t){r.uniform4uiv(this.addr,t)}function jm(r,t,e){const i=this.cache,s=t.length,a=ir(e,s);de(i,a)||(r.uniform1iv(this.addr,a),me(i,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Mh,a[o])}function Km(r,t,e){const i=this.cache,s=t.length,a=ir(e,s);de(i,a)||(r.uniform1iv(this.addr,a),me(i,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sh,a[o])}function Zm(r,t,e){const i=this.cache,s=t.length,a=ir(e,s);de(i,a)||(r.uniform1iv(this.addr,a),me(i,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ah,a[o])}function $m(r,t,e){const i=this.cache,s=t.length,a=ir(e,s);de(i,a)||(r.uniform1iv(this.addr,a),me(i,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yh,a[o])}function Jm(r){switch(r){case 5126:return Lm;case 35664:return Fm;case 35665:return Im;case 35666:return Um;case 35674:return Nm;case 35675:return Om;case 35676:return km;case 5124:case 35670:return zm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return Ym;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}class Qm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Bm(e.type)}}class t0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jm(e.type)}}class e0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const l=s[a];l.setValue(t,e[l.id],i)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function vl(r,t){r.seq.push(t),r.map[t.id]=t}function n0(r,t,e){const i=r.name,s=i.length;for(kr.lastIndex=0;;){const a=kr.exec(i),o=kr.lastIndex;let l=a[1];const h=a[2]==="]",u=a[3];if(h&&(l=l|0),u===void 0||u==="["&&o+2===s){vl(e,u===void 0?new Qm(l,r,t):new t0(l,r,t));break}else{let f=e.map[l];f===void 0&&(f=new e0(l),vl(e,f)),e=f}}}class js{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);n0(a,o,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,o=e.length;a!==o;++a){const l=e[a],h=i[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function El(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const i0=37297;let s0=0;function r0(r,t){const e=r.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const l=o+1;i.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return i.join(`
`)}const Ml=new Lt;function a0(r){Gt._getMatrix(Ml,Gt.workingColorSpace,r);const t=`mat3( ${Ml.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(r)){case Zs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function yl(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=r.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+r0(r.getShaderSource(t),o)}else return s}function o0(r,t){const e=a0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function l0(r,t){let e;switch(t){case fu:e="Linear";break;case pu:e="Reinhard";break;case du:e="Cineon";break;case mu:e="ACESFilmic";break;case gu:e="AgX";break;case _u:e="Neutral";break;case xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new P;function h0(){Gt.getLuminanceCoefficients(zs);const r=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function c0(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function f0(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=r.getActiveAttrib(t,s),o=a.name;let l=1;a.type===r.FLOAT_MAT2&&(l=2),a.type===r.FLOAT_MAT3&&(l=3),a.type===r.FLOAT_MAT4&&(l=4),e[o]={type:a.type,location:r.getAttribLocation(t,o),locationSize:l}}return e}function ts(r){return r!==""}function Sl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Al(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(r){return r.replace(p0,m0)}const d0=new Map;function m0(r,t){let e=Ut[t];if(e===void 0){const i=d0.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pa(e)}const x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(r){return r.replace(x0,g0)}function g0(r,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Cl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function v0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wi:case Ri:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ri:t="ENVMAP_MODE_REFRACTION";break}return t}function M0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zl:t="ENVMAP_BLENDING_MULTIPLY";break;case uu:t="ENVMAP_BLENDING_MIX";break;case cu:t="ENVMAP_BLENDING_ADD";break}return t}function y0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function S0(r,t,e,i){const s=r.getContext(),a=e.defines;let o=e.vertexShader,l=e.fragmentShader;const h=_0(e),u=v0(e),c=E0(e),f=M0(e),p=y0(e),m=u0(e),g=c0(a),_=s.createProgram();let x,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),d.length>0&&(d+=`
`)):(x=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),d=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Nn?l0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),h0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),o=Pa(o),o=Sl(o,e),o=Al(o,e),l=Pa(l),l=Sl(l,e),l=Al(l,e),o=Tl(o),l=Tl(l),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",e.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+x+o,y=T+d+l,D=El(s,s.VERTEX_SHADER,A),b=El(s,s.FRAGMENT_SHADER,y);s.attachShader(_,D),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(B){if(r.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),n=s.getShaderInfoLog(D).trim(),N=s.getShaderInfoLog(b).trim();let G=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,_,D,b);else{const W=yl(s,D,"vertex"),O=yl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+W+`
`+O)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(n===""||N==="")&&(k=!1);k&&(B.diagnostics={runnable:G,programLog:Y,vertexShader:{log:n,prefix:x},fragmentShader:{log:N,prefix:d}})}s.deleteShader(D),s.deleteShader(b),F=new js(s,_),S=f0(s,_)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,i0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=b,this}let A0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new C0(t),e.set(t,i)),i}}class C0{constructor(t){this.id=A0++,this.code=t,this.usedTimes=0}}function b0(r,t,e,i,s,a,o){const l=new sh,h=new T0,u=new Set,c=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function x(S,M,B,Y,n){const N=Y.fog,G=n.geometry,k=S.isMeshStandardMaterial?Y.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),O=W&&W.mapping===tr?W.image.height:null,tt=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=rt!==void 0?rt.length:0;let Mt=0;G.morphAttributes.position!==void 0&&(Mt=1),G.morphAttributes.normal!==void 0&&(Mt=2),G.morphAttributes.color!==void 0&&(Mt=3);let ne,j,et,xt;if(tt){const $t=Qe[tt];ne=$t.vertexShader,j=$t.fragmentShader}else ne=S.vertexShader,j=S.fragmentShader,h.update(S),et=h.getVertexShaderID(S),xt=h.getFragmentShaderID(S);const at=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),qt=n.isInstancedMesh===!0,Ct=n.isBatchedMesh===!0,ue=!!S.map,ae=!!S.matcap,kt=!!W,R=!!S.aoMap,Oe=!!S.lightMap,zt=!!S.bumpMap,Ht=!!S.normalMap,vt=!!S.displacementMap,se=!!S.emissiveMap,_t=!!S.metalnessMap,C=!!S.roughnessMap,v=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,$=S.iridescence>0,q=S.sheen>0,gt=S.transmission>0,ot=v&&!!S.anisotropyMap,ct=z&&!!S.clearcoatMap,Wt=z&&!!S.clearcoatNormalMap,Q=z&&!!S.clearcoatRoughnessMap,ft=$&&!!S.iridescenceMap,Tt=$&&!!S.iridescenceThicknessMap,bt=q&&!!S.sheenColorMap,pt=q&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,It=!!S.specularColorMap,ie=!!S.specularIntensityMap,L=gt&&!!S.transmissionMap,it=gt&&!!S.thicknessMap,X=!!S.gradientMap,Z=!!S.alphaMap,ht=S.alphaTest>0,lt=!!S.alphaHash,Pt=!!S.extensions;let le=Nn;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(le=r.toneMapping);const Ee={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:j,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ct,batchingColor:Ct&&n._colorsTexture!==null,instancing:qt,instancingColor:qt&&n.instanceColor!==null,instancingMorph:qt&&n.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Re,alphaToCoverage:!!S.alphaToCoverage,map:ue,matcap:ae,envMap:kt,envMapMode:kt&&W.mapping,envMapCubeUVHeight:O,aoMap:R,lightMap:Oe,bumpMap:zt,normalMap:Ht,displacementMap:p&&vt,emissiveMap:se,normalMapObjectSpace:Ht&&S.normalMapType===Au,normalMapTangentSpace:Ht&&S.normalMapType===Ql,metalnessMap:_t,roughnessMap:C,anisotropy:v,anisotropyMap:ot,clearcoat:z,clearcoatMap:ct,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:$,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:bt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:It,specularIntensityMap:ie,transmission:gt,transmissionMap:L,thicknessMap:it,gradientMap:X,opaque:S.transparent===!1&&S.blending===Si&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:lt,combine:S.combine,mapUv:ue&&_(S.map.channel),aoMapUv:R&&_(S.aoMap.channel),lightMapUv:Oe&&_(S.lightMap.channel),bumpMapUv:zt&&_(S.bumpMap.channel),normalMapUv:Ht&&_(S.normalMap.channel),displacementMapUv:vt&&_(S.displacementMap.channel),emissiveMapUv:se&&_(S.emissiveMap.channel),metalnessMapUv:_t&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:ct&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Vt&&_(S.specularMap.channel),specularColorMapUv:It&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ht||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!G.attributes.uv&&(ue||Z),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:St,skinning:n.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Mt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&Gt.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=u.has(1),Ee.vertexUv2s=u.has(2),Ee.vertexUv3s=u.has(3),u.clear(),Ee}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)M.push(B),M.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(T(M,S),A(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function A(S,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),S.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.decodeVideoTextureEmissive&&l.enable(20),M.alphaToCoverage&&l.enable(21),S.push(l.mask)}function y(S){const M=g[S.type];let B;if(M){const Y=Qe[M];B=xc.clone(Y.uniforms)}else B=S.uniforms;return B}function D(S,M){let B;for(let Y=0,n=c.length;Y<n;Y++){const N=c[Y];if(N.cacheKey===M){B=N,++B.usedTimes;break}}return B===void 0&&(B=new S0(r,M,S,a),c.push(B)),B}function b(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function w(S){h.remove(S)}function F(){h.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:y,acquireProgram:D,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:F}}function w0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function i(o){r.delete(o)}function s(o,l,h){r.get(o)[l]=h}function a(){r=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function R0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function bl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wl(){const r=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function o(f,p,m,g,_,x){let d=r[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:x},r[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=x),t++,d}function l(f,p,m,g,_,x){const d=o(f,p,m,g,_,x);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function h(f,p,m,g,_,x){const d=o(f,p,m,g,_,x);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function u(f,p){e.length>1&&e.sort(f||R0),i.length>1&&i.sort(p||bl),s.length>1&&s.sort(p||bl)}function c(){for(let f=t,p=r.length;f<p;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:l,unshift:h,finish:c,sort:u}}function D0(){let r=new WeakMap;function t(i,s){const a=r.get(i);let o;return a===void 0?(o=new wl,r.set(i,[o])):s>=a.length?(o=new wl,a.push(o)):o=a[s],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function P0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new At};break;case"SpotLight":e={position:new P,direction:new P,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function B0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let L0=0;function F0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function I0(r){const t=new P0,e=B0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,a=new Ft,o=new Ft;function l(u){let c=0,f=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,x=0,d=0,T=0,A=0,y=0,D=0,b=0,w=0;u.sort(F0);for(let S=0,M=u.length;S<M;S++){const B=u[S],Y=B.color,n=B.intensity,N=B.distance,G=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)c+=Y.r*n,f+=Y.g*n,p+=Y.b*n;else if(B.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(B.sh.coefficients[k],n);w++}else if(B.isDirectionalLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,O=e.get(B);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=B.shadow.matrix,T++}i.directional[m]=k,m++}else if(B.isSpotLight){const k=t.get(B);k.position.setFromMatrixPosition(B.matrixWorld),k.color.copy(Y).multiplyScalar(n),k.distance=N,k.coneCos=Math.cos(B.angle),k.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),k.decay=B.decay,i.spot[_]=k;const W=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,W.updateMatrices(B),B.castShadow&&b++),i.spotLightMatrix[_]=W.matrix,B.castShadow){const O=e.get(B);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=G,y++}_++}else if(B.isRectAreaLight){const k=t.get(B);k.color.copy(Y).multiplyScalar(n),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=k,x++}else if(B.isPointLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),k.distance=B.distance,k.decay=B.decay,B.castShadow){const W=B.shadow,O=e.get(B);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=B.shadow.matrix,A++}i.point[g]=k,g++}else if(B.isHemisphereLight){const k=t.get(B);k.skyColor.copy(B.color).multiplyScalar(n),k.groundColor.copy(B.groundColor).multiplyScalar(n),i.hemi[d]=k,d++}}x>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=p;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==x||F.hemiLength!==d||F.numDirectionalShadows!==T||F.numPointShadows!==A||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=x,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+D-b,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=x,F.hemiLength=d,F.numDirectionalShadows=T,F.numPointShadows=A,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=w,i.version=L0++)}function h(u,c){let f=0,p=0,m=0,g=0,_=0;const x=c.matrixWorldInverse;for(let d=0,T=u.length;d<T;d++){const A=u[d];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),f++}else if(A.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),m++}else if(A.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(x),o.identity(),a.copy(A.matrixWorld),a.premultiply(x),o.extractRotation(a),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(x),p++}else if(A.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(x),_++}}}return{setup:l,setupView:h,state:i}}function Rl(r){const t=new I0(r),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function a(c){e.push(c)}function o(c){i.push(c)}function l(){t.setup(e)}function h(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function U0(r){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Rl(r),t.set(s,[l])):a>=o.length?(l=new Rl(r),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:e,dispose:i}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k0(r,t,e){let i=new Ya;const s=new Rt,a=new Rt,o=new jt,l=new Fc({depthPacking:Su}),h=new Ic,u={},c=e.maxTextureSize,f={[yn]:Be,[Be]:yn,[tn]:tn},p=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:N0,fragmentShader:O0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ne(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let d=this.type;this.render=function(b,w,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Un),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const n=d!==xn&&this.type===xn,N=d===xn&&this.type!==xn;for(let G=0,k=b.length;G<k;G++){const W=b[G],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const tt=O.getFrameExtents();if(s.multiply(tt),a.copy(O.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(a.x=Math.floor(c/tt.x),s.x=a.x*tt.x,O.mapSize.x=a.x),s.y>c&&(a.y=Math.floor(c/tt.y),s.y=a.y*tt.y,O.mapSize.y=a.y)),O.map===null||n===!0||N===!0){const mt=this.type!==xn?{minFilter:be,magFilter:be}:{};O.map!==null&&O.map.dispose(),O.map=new ni(s.x,s.y,mt),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const rt=O.getViewportCount();for(let mt=0;mt<rt;mt++){const Mt=O.getViewport(mt);o.set(a.x*Mt.x,a.y*Mt.y,a.x*Mt.z,a.y*Mt.w),Y.viewport(o),O.updateMatrices(W,mt),i=O.getFrustum(),y(w,F,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===xn&&T(O,F),O.needsUpdate=!1}d=this.type,x.needsUpdate=!1,r.setRenderTarget(S,M,B)};function T(b,w){const F=t.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ni(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,F,p,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,F,m,_,null)}function A(b,w,F,S){let M=null;const B=F.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0)M=B;else if(M=F.isPointLight===!0?h:l,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=M.uuid,n=w.uuid;let N=u[Y];N===void 0&&(N={},u[Y]=N);let G=N[n];G===void 0&&(G=M.clone(),N[n]=G,w.addEventListener("dispose",D)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,S===xn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=r.properties.get(M);Y.light=F}return M}function y(b,w,F,S,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===xn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld);const n=t.update(b),N=b.material;if(Array.isArray(N)){const G=n.groups;for(let k=0,W=G.length;k<W;k++){const O=G[k],tt=N[O.materialIndex];if(tt&&tt.visible){const rt=A(b,tt,S,M);b.onBeforeShadow(r,b,w,F,n,rt,O),r.renderBufferDirect(F,null,n,rt,b,O),b.onAfterShadow(r,b,w,F,n,rt,O)}}}else if(N.visible){const G=A(b,N,S,M);b.onBeforeShadow(r,b,w,F,n,G,null),r.renderBufferDirect(F,null,n,G,b,null),b.onAfterShadow(r,b,w,F,n,G,null)}}const Y=b.children;for(let n=0,N=Y.length;n<N;n++)y(Y[n],w,F,S,M)}function D(b){b.target.removeEventListener("dispose",D);for(const F in u){const S=u[F],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const z0={[Yr]:qr,[jr]:$r,[Kr]:Jr,[bi]:Zr,[qr]:Yr,[$r]:jr,[Jr]:Kr,[Zr]:bi};function H0(r,t){function e(){let L=!1;const it=new jt;let X=null;const Z=new jt(0,0,0,0);return{setMask:function(ht){X!==ht&&!L&&(r.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){L=ht},setClear:function(ht,lt,Pt,le,Ee){Ee===!0&&(ht*=le,lt*=le,Pt*=le),it.set(ht,lt,Pt,le),Z.equals(it)===!1&&(r.clearColor(ht,lt,Pt,le),Z.copy(it))},reset:function(){L=!1,X=null,Z.set(-1,0,0,0)}}}function i(){let L=!1,it=!1,X=null,Z=null,ht=null;return{setReversed:function(lt){if(it!==lt){const Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const le=ht;ht=null,this.setClear(le)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?at(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(lt){X!==lt&&!L&&(r.depthMask(lt),X=lt)},setFunc:function(lt){if(it&&(lt=z0[lt]),Z!==lt){switch(lt){case Yr:r.depthFunc(r.NEVER);break;case qr:r.depthFunc(r.ALWAYS);break;case jr:r.depthFunc(r.LESS);break;case bi:r.depthFunc(r.LEQUAL);break;case Kr:r.depthFunc(r.EQUAL);break;case Zr:r.depthFunc(r.GEQUAL);break;case $r:r.depthFunc(r.GREATER);break;case Jr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ht!==lt&&(it&&(lt=1-lt),r.clearDepth(lt),ht=lt)},reset:function(){L=!1,X=null,Z=null,ht=null,it=!1}}}function s(){let L=!1,it=null,X=null,Z=null,ht=null,lt=null,Pt=null,le=null,Ee=null;return{setTest:function($t){L||($t?at(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function($t){it!==$t&&!L&&(r.stencilMask($t),it=$t)},setFunc:function($t,We,hn){(X!==$t||Z!==We||ht!==hn)&&(r.stencilFunc($t,We,hn),X=$t,Z=We,ht=hn)},setOp:function($t,We,hn){(lt!==$t||Pt!==We||le!==hn)&&(r.stencilOp($t,We,hn),lt=$t,Pt=We,le=hn)},setLocked:function($t){L=$t},setClear:function($t){Ee!==$t&&(r.clearStencil($t),Ee=$t)},reset:function(){L=!1,it=null,X=null,Z=null,ht=null,lt=null,Pt=null,le=null,Ee=null}}}const a=new e,o=new i,l=new s,h=new WeakMap,u=new WeakMap;let c={},f={},p=new WeakMap,m=[],g=null,_=!1,x=null,d=null,T=null,A=null,y=null,D=null,b=null,w=new At(0,0,0),F=0,S=!1,M=null,B=null,Y=null,n=null,N=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=W>=2);let tt=null,rt={};const mt=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),ne=new jt().fromArray(mt),j=new jt().fromArray(Mt);function et(L,it,X,Z){const ht=new Uint8Array(4),lt=r.createTexture();r.bindTexture(L,lt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pt=0;Pt<X;Pt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(it,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(it+Pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return lt}const xt={};xt[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),at(r.DEPTH_TEST),o.setFunc(bi),zt(!1),Ht(co),at(r.CULL_FACE),R(Un);function at(L){c[L]!==!0&&(r.enable(L),c[L]=!0)}function St(L){c[L]!==!1&&(r.disable(L),c[L]=!1)}function qt(L,it){return f[L]!==it?(r.bindFramebuffer(L,it),f[L]=it,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=it),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=it),!0):!1}function Ct(L,it){let X=m,Z=!1;if(L){X=p.get(it),X===void 0&&(X=[],p.set(it,X));const ht=L.textures;if(X.length!==ht.length||X[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,Pt=ht.length;lt<Pt;lt++)X[lt]=r.COLOR_ATTACHMENT0+lt;X.length=ht.length,Z=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Z=!0);Z&&r.drawBuffers(X)}function ue(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const ae={[Zn]:r.FUNC_ADD,[qh]:r.FUNC_SUBTRACT,[jh]:r.FUNC_REVERSE_SUBTRACT};ae[Kh]=r.MIN,ae[Zh]=r.MAX;const kt={[$h]:r.ZERO,[Jh]:r.ONE,[Qh]:r.SRC_COLOR,[Wr]:r.SRC_ALPHA,[ru]:r.SRC_ALPHA_SATURATE,[iu]:r.DST_COLOR,[eu]:r.DST_ALPHA,[tu]:r.ONE_MINUS_SRC_COLOR,[Xr]:r.ONE_MINUS_SRC_ALPHA,[su]:r.ONE_MINUS_DST_COLOR,[nu]:r.ONE_MINUS_DST_ALPHA,[au]:r.CONSTANT_COLOR,[ou]:r.ONE_MINUS_CONSTANT_COLOR,[lu]:r.CONSTANT_ALPHA,[hu]:r.ONE_MINUS_CONSTANT_ALPHA};function R(L,it,X,Z,ht,lt,Pt,le,Ee,$t){if(L===Un){_===!0&&(St(r.BLEND),_=!1);return}if(_===!1&&(at(r.BLEND),_=!0),L!==Yh){if(L!==x||$t!==S){if((d!==Zn||y!==Zn)&&(r.blendEquation(r.FUNC_ADD),d=Zn,y=Zn),$t)switch(L){case Si:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fo:r.blendFunc(r.ONE,r.ONE);break;case po:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case po:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,A=null,D=null,b=null,w.set(0,0,0),F=0,x=L,S=$t}return}ht=ht||it,lt=lt||X,Pt=Pt||Z,(it!==d||ht!==y)&&(r.blendEquationSeparate(ae[it],ae[ht]),d=it,y=ht),(X!==T||Z!==A||lt!==D||Pt!==b)&&(r.blendFuncSeparate(kt[X],kt[Z],kt[lt],kt[Pt]),T=X,A=Z,D=lt,b=Pt),(le.equals(w)===!1||Ee!==F)&&(r.blendColor(le.r,le.g,le.b,Ee),w.copy(le),F=Ee),x=L,S=!1}function Oe(L,it){L.side===tn?St(r.CULL_FACE):at(r.CULL_FACE);let X=L.side===Be;it&&(X=!X),zt(X),L.blending===Si&&L.transparent===!1?R(Un):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),a.setMask(L.colorWrite);const Z=L.stencilWrite;l.setTest(Z),Z&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function Ht(L){L!==Gh?(at(r.CULL_FACE),L!==B&&(L===co?r.cullFace(r.BACK):L===Wh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),B=L}function vt(L){L!==Y&&(k&&r.lineWidth(L),Y=L)}function se(L,it,X){L?(at(r.POLYGON_OFFSET_FILL),(n!==it||N!==X)&&(r.polygonOffset(it,X),n=it,N=X)):St(r.POLYGON_OFFSET_FILL)}function _t(L){L?at(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+G-1),tt!==L&&(r.activeTexture(L),tt=L)}function v(L,it,X){X===void 0&&(tt===null?X=r.TEXTURE0+G-1:X=tt);let Z=rt[X];Z===void 0&&(Z={type:void 0,texture:void 0},rt[X]=Z),(Z.type!==L||Z.texture!==it)&&(tt!==X&&(r.activeTexture(X),tt=X),r.bindTexture(L,it||xt[L]),Z.type=L,Z.texture=it)}function z(){const L=rt[tt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(L){ne.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function pt(L){j.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function Vt(L,it){let X=u.get(it);X===void 0&&(X=new WeakMap,u.set(it,X));let Z=X.get(L);Z===void 0&&(Z=r.getUniformBlockIndex(it,L.name),X.set(L,Z))}function It(L,it){const Z=u.get(it).get(L);h.get(it)!==Z&&(r.uniformBlockBinding(it,Z,L.__bindingPointIndex),h.set(it,Z))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},tt=null,rt={},f={},p=new WeakMap,m=[],g=null,_=!1,x=null,d=null,T=null,A=null,y=null,D=null,b=null,w=new At(0,0,0),F=0,S=!1,M=null,B=null,Y=null,n=null,N=null,ne.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:at,disable:St,bindFramebuffer:qt,drawBuffers:Ct,useProgram:ue,setBlending:R,setMaterial:Oe,setFlipSided:zt,setCullFace:Ht,setLineWidth:vt,setPolygonOffset:se,setScissorTest:_t,activeTexture:C,bindTexture:v,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Vt,uniformBlockBinding:It,texStorage2D:Wt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:gt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:bt,viewport:pt,reset:ie}}function V0(r,t,e,i,s,a,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Rt,c=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return m?new OffscreenCanvas(C,v):os("canvas")}function _(C,v,z){let K=1;const $=_t(C);if(($.width>z||$.height>z)&&(K=z/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*$.width),gt=Math.floor(K*$.height);f===void 0&&(f=g(q,gt));const ot=v?g(q,gt):f;return ot.width=q,ot.height=gt,ot.getContext("2d").drawImage(C,0,0,q,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+gt+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function x(C){return C.generateMipmaps}function d(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(C,v,z,K,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=v;if(v===r.RED&&(z===r.FLOAT&&(q=r.R32F),z===r.HALF_FLOAT&&(q=r.R16F),z===r.UNSIGNED_BYTE&&(q=r.R8)),v===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.R8UI),z===r.UNSIGNED_SHORT&&(q=r.R16UI),z===r.UNSIGNED_INT&&(q=r.R32UI),z===r.BYTE&&(q=r.R8I),z===r.SHORT&&(q=r.R16I),z===r.INT&&(q=r.R32I)),v===r.RG&&(z===r.FLOAT&&(q=r.RG32F),z===r.HALF_FLOAT&&(q=r.RG16F),z===r.UNSIGNED_BYTE&&(q=r.RG8)),v===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RG8UI),z===r.UNSIGNED_SHORT&&(q=r.RG16UI),z===r.UNSIGNED_INT&&(q=r.RG32UI),z===r.BYTE&&(q=r.RG8I),z===r.SHORT&&(q=r.RG16I),z===r.INT&&(q=r.RG32I)),v===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(q=r.RGB16UI),z===r.UNSIGNED_INT&&(q=r.RGB32UI),z===r.BYTE&&(q=r.RGB8I),z===r.SHORT&&(q=r.RGB16I),z===r.INT&&(q=r.RGB32I)),v===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),z===r.UNSIGNED_INT&&(q=r.RGBA32UI),z===r.BYTE&&(q=r.RGBA8I),z===r.SHORT&&(q=r.RGBA16I),z===r.INT&&(q=r.RGBA32I)),v===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),v===r.RGBA){const gt=$?Zs:Gt.getTransfer(K);z===r.FLOAT&&(q=r.RGBA32F),z===r.HALF_FLOAT&&(q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(q=gt===te?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(C,v){let z;return C?v===null||v===ei||v===Pi?z=r.DEPTH24_STENCIL8:v===$e?z=r.DEPTH32F_STENCIL8:v===ss&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===Pi?z=r.DEPTH_COMPONENT24:v===$e?z=r.DEPTH_COMPONENT32F:v===ss&&(z=r.DEPTH_COMPONENT16),z}function D(C,v){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==be&&C.minFilter!==Ue?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function b(C){const v=C.target;v.removeEventListener("dispose",b),F(v),v.isVideoTexture&&c.delete(v)}function w(C){const v=C.target;v.removeEventListener("dispose",w),M(v)}function F(C){const v=i.get(C);if(v.__webglInit===void 0)return;const z=C.source,K=p.get(z);if(K){const $=K[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(C),Object.keys(K).length===0&&p.delete(z)}i.remove(C)}function S(C){const v=i.get(C);r.deleteTexture(v.__webglTexture);const z=C.source,K=p.get(z);delete K[v.__cacheKey],o.memory.textures--}function M(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let $=0;$<v.__webglFramebuffer[K].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[K][$]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=C.textures;for(let K=0,$=z.length;K<$;K++){const q=i.get(z[K]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(C)}let B=0;function Y(){B=0}function n(){const C=B;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function N(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function G(C,v){const z=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,C,v);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+v)}function k(C,v){const z=i.get(C);if(C.version>0&&z.__version!==C.version){j(z,C,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+v)}function W(C,v){const z=i.get(C);if(C.version>0&&z.__version!==C.version){j(z,C,v);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+v)}function O(C,v){const z=i.get(C);if(C.version>0&&z.__version!==C.version){et(z,C,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+v)}const tt={[Di]:r.REPEAT,[Fn]:r.CLAMP_TO_EDGE,[Ks]:r.MIRRORED_REPEAT},rt={[be]:r.NEAREST,[Vl]:r.NEAREST_MIPMAP_NEAREST,[Qi]:r.NEAREST_MIPMAP_LINEAR,[Ue]:r.LINEAR,[Vs]:r.LINEAR_MIPMAP_NEAREST,[_n]:r.LINEAR_MIPMAP_LINEAR},mt={[Tu]:r.NEVER,[Pu]:r.ALWAYS,[Cu]:r.LESS,[th]:r.LEQUAL,[bu]:r.EQUAL,[Du]:r.GEQUAL,[wu]:r.GREATER,[Ru]:r.NOTEQUAL};function Mt(C,v){if(v.type===$e&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ue||v.magFilter===Vs||v.magFilter===Qi||v.magFilter===_n||v.minFilter===Ue||v.minFilter===Vs||v.minFilter===Qi||v.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,tt[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,tt[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,tt[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,rt[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,rt[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===be||v.minFilter!==Qi&&v.minFilter!==_n||v.type===$e&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ne(C,v){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",b));const K=v.source;let $=p.get(K);$===void 0&&($={},p.set(K,$));const q=N(v);if(q!==C.__cacheKey){$[q]===void 0&&($[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[q].usedTimes++;const gt=$[C.__cacheKey];gt!==void 0&&($[C.__cacheKey].usedTimes--,gt.usedTimes===0&&S(v)),C.__cacheKey=q,C.__webglTexture=$[q].texture}return z}function j(C,v,z){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);const $=ne(C,v),q=v.source;e.bindTexture(K,C.__webglTexture,r.TEXTURE0+z);const gt=i.get(q);if(q.version!==gt.__version||$===!0){e.activeTexture(r.TEXTURE0+z);const ot=Gt.getPrimaries(Gt.workingColorSpace),ct=v.colorSpace===Ln?null:Gt.getPrimaries(v.colorSpace),Wt=v.colorSpace===Ln||ot===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Q=_(v.image,!1,s.maxTextureSize);Q=se(v,Q);const ft=a.convert(v.format,v.colorSpace),Tt=a.convert(v.type);let bt=A(v.internalFormat,ft,Tt,v.colorSpace,v.isVideoTexture);Mt(K,v);let pt;const Vt=v.mipmaps,It=v.isVideoTexture!==!0,ie=gt.__version===void 0||$===!0,L=q.dataReady,it=D(v,Q);if(v.isDepthTexture)bt=y(v.format===Bi,v.type),ie&&(It?e.texStorage2D(r.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,ft,Tt,null));else if(v.isDataTexture)if(Vt.length>0){It&&ie&&e.texStorage2D(r.TEXTURE_2D,it,bt,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],It?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(r.TEXTURE_2D,X,bt,pt.width,pt.height,0,ft,Tt,pt.data);v.generateMipmaps=!1}else It?(ie&&e.texStorage2D(r.TEXTURE_2D,it,bt,Q.width,Q.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Tt,Q.data)):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,ft,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){It&&ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,Vt[0].width,Vt[0].height,Q.depth);for(let X=0,Z=Vt.length;X<Z;X++)if(pt=Vt[X],v.format!==Ge)if(ft!==null)if(It){if(L)if(v.layerUpdates.size>0){const ht=rl(pt.width,pt.height,v.format,v.type);for(const lt of v.layerUpdates){const Pt=pt.data.subarray(lt*ht/pt.data.BYTES_PER_ELEMENT,(lt+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,lt,pt.width,pt.height,1,ft,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,bt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,ft,Tt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,bt,pt.width,pt.height,Q.depth,0,ft,Tt,pt.data)}else{It&&ie&&e.texStorage2D(r.TEXTURE_2D,it,bt,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],v.format!==Ge?ft!==null?It?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(r.TEXTURE_2D,X,bt,pt.width,pt.height,0,ft,Tt,pt.data)}else if(v.isDataArrayTexture)if(It){if(ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){const X=rl(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const ht=Q.data.subarray(Z*X/Q.data.BYTES_PER_ELEMENT,(Z+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ft,Tt,ht)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(v.isData3DTexture)It?(ie&&e.texStorage3D(r.TEXTURE_3D,it,bt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(v.isFramebufferTexture){if(ie)if(It)e.texStorage2D(r.TEXTURE_2D,it,bt,Q.width,Q.height);else{let X=Q.width,Z=Q.height;for(let ht=0;ht<it;ht++)e.texImage2D(r.TEXTURE_2D,ht,bt,X,Z,0,ft,Tt,null),X>>=1,Z>>=1}}else if(Vt.length>0){if(It&&ie){const X=_t(Vt[0]);e.texStorage2D(r.TEXTURE_2D,it,bt,X.width,X.height)}for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],It?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,ft,Tt,pt):e.texImage2D(r.TEXTURE_2D,X,bt,ft,Tt,pt);v.generateMipmaps=!1}else if(It){if(ie){const X=_t(Q);e.texStorage2D(r.TEXTURE_2D,it,bt,X.width,X.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,Tt,Q)}else e.texImage2D(r.TEXTURE_2D,0,bt,ft,Tt,Q);x(v)&&d(K),gt.__version=q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function et(C,v,z){if(v.image.length!==6)return;const K=ne(C,v),$=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+z);const q=i.get($);if($.version!==q.__version||K===!0){e.activeTexture(r.TEXTURE0+z);const gt=Gt.getPrimaries(Gt.workingColorSpace),ot=v.colorSpace===Ln?null:Gt.getPrimaries(v.colorSpace),ct=v.colorSpace===Ln||gt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!Wt&&!Q?ft[Z]=_(v.image[Z],!0,s.maxCubemapSize):ft[Z]=Q?v.image[Z].image:v.image[Z],ft[Z]=se(v,ft[Z]);const Tt=ft[0],bt=a.convert(v.format,v.colorSpace),pt=a.convert(v.type),Vt=A(v.internalFormat,bt,pt,v.colorSpace),It=v.isVideoTexture!==!0,ie=q.__version===void 0||K===!0,L=$.dataReady;let it=D(v,Tt);Mt(r.TEXTURE_CUBE_MAP,v);let X;if(Wt){It&&ie&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Vt,Tt.width,Tt.height);for(let Z=0;Z<6;Z++){X=ft[Z].mipmaps;for(let ht=0;ht<X.length;ht++){const lt=X[ht];v.format!==Ge?bt!==null?It?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,bt,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Vt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,bt,pt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Vt,lt.width,lt.height,0,bt,pt,lt.data)}}}else{if(X=v.mipmaps,It&&ie){X.length>0&&it++;const Z=_t(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,bt,pt,ft[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,ft[Z].width,ft[Z].height,0,bt,pt,ft[Z].data);for(let ht=0;ht<X.length;ht++){const Pt=X[ht].image[Z].image;It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Pt.width,Pt.height,bt,pt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Vt,Pt.width,Pt.height,0,bt,pt,Pt.data)}}else{It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,pt,ft[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,bt,pt,ft[Z]);for(let ht=0;ht<X.length;ht++){const lt=X[ht];It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,bt,pt,lt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Vt,bt,pt,lt.image[Z])}}}x(v)&&d(r.TEXTURE_CUBE_MAP),q.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function xt(C,v,z,K,$,q){const gt=a.convert(z.format,z.colorSpace),ot=a.convert(z.type),ct=A(z.internalFormat,gt,ot,z.colorSpace),Wt=i.get(v),Q=i.get(z);if(Q.__renderTarget=v,!Wt.__hasExternalTextures){const ft=Math.max(1,v.width>>q),Tt=Math.max(1,v.height>>q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,q,ct,ft,Tt,v.depth,0,gt,ot,null):e.texImage2D($,q,ct,ft,Tt,0,gt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Ht(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,$,Q.__webglTexture,0,zt(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,$,Q.__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(C,v,z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const K=v.depthTexture,$=K&&K.isDepthTexture?K.type:null,q=y(v.stencilBuffer,$),gt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=zt(v);Ht(v)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,q,v.width,v.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,q,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,C)}else{const K=v.textures;for(let $=0;$<K.length;$++){const q=K[$],gt=a.convert(q.format,q.colorSpace),ot=a.convert(q.type),ct=A(q.internalFormat,gt,ot,q.colorSpace),Wt=zt(v);z&&Ht(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,ct,v.width,v.height):Ht(v)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,ct,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ct,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const $=K.__webglTexture,q=zt(v);if(v.depthTexture.format===Ai)Ht(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(v.depthTexture.format===Bi)Ht(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function qt(C){const v=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=K}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");St(v.__webglFramebuffer,C)}else if(z){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),at(v.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),at(v.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(C,v,z){const K=i.get(C);v!==void 0&&xt(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&qt(C)}function ue(C){const v=C.texture,z=i.get(C),K=i.get(v);C.addEventListener("dispose",w);const $=C.textures,q=C.isWebGLCubeRenderTarget===!0,gt=$.length>1;if(gt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let ct=0;ct<v.mipmaps.length;ct++)z.__webglFramebuffer[ot][ct]=r.createFramebuffer()}else z.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)z.__webglFramebuffer[ot]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(gt)for(let ot=0,ct=$.length;ot<ct;ot++){const Wt=i.get($[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ht(C)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<$.length;ot++){const ct=$[ot];z.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const Wt=a.convert(ct.format,ct.colorSpace),Q=a.convert(ct.type),ft=A(ct.internalFormat,Wt,Q,ct.colorSpace,C.isXRRenderTarget===!0),Tt=zt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,ft,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),at(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Mt(r.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)xt(z.__webglFramebuffer[ot][ct],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else xt(z.__webglFramebuffer[ot],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(v)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ot=0,ct=$.length;ot<ct;ot++){const Wt=$[ot],Q=i.get(Wt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Mt(r.TEXTURE_2D,Wt),xt(z.__webglFramebuffer,C,Wt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),x(Wt)&&d(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Mt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)xt(z.__webglFramebuffer[ct],C,v,r.COLOR_ATTACHMENT0,ot,ct);else xt(z.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,ot,0);x(v)&&d(ot),e.unbindTexture()}C.depthBuffer&&qt(C)}function ae(C){const v=C.textures;for(let z=0,K=v.length;z<K;z++){const $=v[z];if(x($)){const q=T(C),gt=i.get($).__webglTexture;e.bindTexture(q,gt),d(q),e.unbindTexture()}}}const kt=[],R=[];function Oe(C){if(C.samples>0){if(Ht(C)===!1){const v=C.textures,z=C.width,K=C.height;let $=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=i.get(C),ot=v.length>1;if(ot)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);const Wt=i.get(v[ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,z,K,0,0,z,K,$,r.NEAREST),h===!0&&(kt.length=0,R.length=0,kt.push(r.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&(kt.push(q),R.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,R)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);const Wt=i.get(v[ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function zt(C){return Math.min(s.maxSamples,C.samples)}function Ht(C){const v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(C){const v=o.render.frame;c.get(C)!==v&&(c.set(C,v),C.update())}function se(C,v){const z=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Re&&z!==Ln&&(Gt.getTransfer(z)===te?(K!==Ge||$!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function _t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=n,this.resetTextureUnits=Y,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=O,this.rebindTextures=Ct,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ht}function G0(r,t){function e(i,s=Ln){let a;const o=Gt.getTransfer(s);if(i===Sn)return r.UNSIGNED_BYTE;if(i===Ua)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Na)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Xl)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Gl)return r.BYTE;if(i===Wl)return r.SHORT;if(i===ss)return r.UNSIGNED_SHORT;if(i===Ia)return r.INT;if(i===ei)return r.UNSIGNED_INT;if(i===$e)return r.FLOAT;if(i===ls)return r.HALF_FLOAT;if(i===Yl)return r.ALPHA;if(i===ql)return r.RGB;if(i===Ge)return r.RGBA;if(i===jl)return r.LUMINANCE;if(i===Kl)return r.LUMINANCE_ALPHA;if(i===Ai)return r.DEPTH_COMPONENT;if(i===Bi)return r.DEPTH_STENCIL;if(i===Oa)return r.RED;if(i===ka)return r.RED_INTEGER;if(i===Zl)return r.RG;if(i===za)return r.RG_INTEGER;if(i===Ha)return r.RGBA_INTEGER;if(i===Gs||i===Ws||i===Xs||i===Ys)if(o===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Gs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Gs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ys)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ea||i===na||i===ia||i===sa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===na)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ra||i===aa||i===oa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ra||i===aa)return o===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===oa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===la||i===ha||i===ua||i===ca||i===fa||i===pa||i===da||i===ma||i===xa||i===ga||i===_a||i===va||i===Ea||i===Ma)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===la)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ha)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ua)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ca)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===da)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ma)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xa)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ga)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_a)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===va)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ea)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ma)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qs||i===ya||i===Sa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===qs)return o===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ya)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$l||i===Aa||i===Ta||i===Ca)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===qs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Aa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ca)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pi?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ge,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new On({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends ii{constructor(t,e){super();const i=this;let s=null,a=1,o=null,l="local-floor",h=1,u=null,c=null,f=null,p=null,m=null,g=null;const _=new Y0,x=e.getContextAttributes();let d=null,T=null;const A=[],y=[],D=new Rt;let b=null;const w=new Ce;w.viewport=new jt;const F=new Ce;F.viewport=new jt;const S=[w,F],M=new sf;let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=A[j];return et===void 0&&(et=new br,A[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=A[j];return et===void 0&&(et=new br,A[j]=et),et.getGripSpace()},this.getHand=function(j){let et=A[j];return et===void 0&&(et=new br,A[j]=et),et.getHandSpace()};function n(j){const et=y.indexOf(j.inputSource);if(et===-1)return;const xt=A[et];xt!==void 0&&(xt.update(j.inputSource,j.frame,u||o),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){s.removeEventListener("select",n),s.removeEventListener("selectstart",n),s.removeEventListener("selectend",n),s.removeEventListener("squeeze",n),s.removeEventListener("squeezestart",n),s.removeEventListener("squeezeend",n),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",G);for(let j=0;j<A.length;j++){const et=y[j];et!==null&&(y[j]=null,A[j].disconnect(et))}B=null,Y=null,_.reset(),t.setRenderTarget(d),m=null,p=null,f=null,s=null,T=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",n),s.addEventListener("selectstart",n),s.addEventListener("selectend",n),s.addEventListener("squeeze",n),s.addEventListener("squeezestart",n),s.addEventListener("squeezeend",n),s.addEventListener("end",N),s.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,at=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?Bi:Ai,at=x.stencil?Pi:ei);const qt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:a};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(qt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new ni(p.textureWidth,p.textureHeight,{format:Ge,type:Sn,depthTexture:new mh(p.textureWidth,p.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ni(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await s.requestReferenceSpace(l),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(j){for(let et=0;et<j.removed.length;et++){const xt=j.removed[et],at=y.indexOf(xt);at>=0&&(y[at]=null,A[at].disconnect(xt))}for(let et=0;et<j.added.length;et++){const xt=j.added[et];let at=y.indexOf(xt);if(at===-1){for(let qt=0;qt<A.length;qt++)if(qt>=y.length){y.push(xt),at=qt;break}else if(y[qt]===null){y[qt]=xt,at=qt;break}if(at===-1)break}const St=A[at];St&&St.connect(xt)}}const k=new P,W=new P;function O(j,et,xt){k.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(xt.matrixWorld);const at=k.distanceTo(W),St=et.projectionMatrix.elements,qt=xt.projectionMatrix.elements,Ct=St[14]/(St[10]-1),ue=St[14]/(St[10]+1),ae=(St[9]+1)/St[5],kt=(St[9]-1)/St[5],R=(St[8]-1)/St[0],Oe=(qt[8]+1)/qt[0],zt=Ct*R,Ht=Ct*Oe,vt=at/(-R+Oe),se=vt*-R;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(se),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),St[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const _t=Ct+vt,C=ue+vt,v=zt-se,z=Ht+(at-se),K=ae*ue/C*_t,$=kt*ue/C*_t;j.projectionMatrix.makePerspective(v,z,K,$,_t,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function tt(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let et=j.near,xt=j.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),M.near=F.near=w.near=et,M.far=F.far=w.far=xt,(B!==M.near||Y!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),B=M.near,Y=M.far),w.layers.mask=j.layers.mask|2,F.layers.mask=j.layers.mask|4,M.layers.mask=w.layers.mask|F.layers.mask;const at=j.parent,St=M.cameras;tt(M,at);for(let qt=0;qt<St.length;qt++)tt(St[qt],at);St.length===2?O(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),rt(j,M,at)};function rt(j,et,xt){xt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Li*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return h},this.setFoveation=function(j){h=j,p!==null&&(p.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let mt=null;function Mt(j,et){if(c=et.getViewerPose(u||o),g=et,c!==null){const xt=c.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let at=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Ct=0;Ct<xt.length;Ct++){const ue=xt[Ct];let ae=null;if(m!==null)ae=m.getViewport(ue);else{const R=f.getViewSubImage(p,ue);ae=R.viewport,Ct===0&&(t.setRenderTargetTextures(T,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(T))}let kt=S[Ct];kt===void 0&&(kt=new Ce,kt.layers.enable(Ct),kt.viewport=new jt,S[Ct]=kt),kt.matrix.fromArray(ue.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ue.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ct===0&&(M.matrix.copy(kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(kt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ct=f.getDepthInformation(xt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,s.renderState)}}for(let xt=0;xt<A.length;xt++){const at=y[xt],St=A[xt];at!==null&&St!==void 0&&St.update(at,et,u||o)}mt&&mt(j,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const ne=new Eh;ne.setAnimationLoop(Mt),this.setAnimationLoop=function(j){mt=j},this.dispose=function(){}}}const Yn=new sn,j0=new Ft;function K0(r,t){function e(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,lh(r)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function s(x,d,T,A,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(x,d):d.isMeshToonMaterial?(a(x,d),f(x,d)):d.isMeshPhongMaterial?(a(x,d),c(x,d)):d.isMeshStandardMaterial?(a(x,d),p(x,d),d.isMeshPhysicalMaterial&&m(x,d,y)):d.isMeshMatcapMaterial?(a(x,d),g(x,d)):d.isMeshDepthMaterial?a(x,d):d.isMeshDistanceMaterial?(a(x,d),_(x,d)):d.isMeshNormalMaterial?a(x,d):d.isLineBasicMaterial?(o(x,d),d.isLineDashedMaterial&&l(x,d)):d.isPointsMaterial?h(x,d,T,A):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,e(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,e(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,e(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===Be&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,e(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===Be&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,e(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,e(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const T=t.get(d),A=T.envMap,y=T.envMapRotation;A&&(x.envMap.value=A,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),x.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(Yn)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,x.aoMapTransform))}function o(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,e(d.map,x.mapTransform))}function l(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function h(x,d,T,A){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*T,x.scale.value=A*.5,d.map&&(x.map.value=d.map,e(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,e(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,e(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,e(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function f(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function p(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,T){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Be&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,d){d.matcap&&(x.matcap.value=d.matcap)}function _(x,d){const T=t.get(d).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Z0(r,t,e,i){let s={},a={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,A){const y=A.program;i.uniformBlockBinding(T,y)}function u(T,A){let y=s[T.id];y===void 0&&(g(T),y=c(T),s[T.id]=y,T.addEventListener("dispose",x));const D=A.program;i.updateUBOMapping(T,D);const b=t.render.frame;a[T.id]!==b&&(p(T),a[T.id]=b)}function c(T){const A=f();T.__bindingPointIndex=A;const y=r.createBuffer(),D=T.__size,b=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,D,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,y),y}function f(){for(let T=0;T<l;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const A=s[T.id],y=T.uniforms,D=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let b=0,w=y.length;b<w;b++){const F=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,M=F.length;S<M;S++){const B=F[S];if(m(B,b,S,D)===!0){const Y=B.__offset,n=Array.isArray(B.value)?B.value:[B.value];let N=0;for(let G=0;G<n.length;G++){const k=n[G],W=_(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,Y+N,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,N),N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(T,A,y,D){const b=T.value,w=A+"_"+y;if(D[w]===void 0)return typeof b=="number"||typeof b=="boolean"?D[w]=b:D[w]=b.clone(),!0;{const F=D[w];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return D[w]=b,!0}else if(F.equals(b)===!1)return F.copy(b),!0}return!1}function g(T){const A=T.uniforms;let y=0;const D=16;for(let w=0,F=A.length;w<F;w++){const S=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,B=S.length;M<B;M++){const Y=S[M],n=Array.isArray(Y.value)?Y.value:[Y.value];for(let N=0,G=n.length;N<G;N++){const k=n[N],W=_(k),O=y%D,tt=O%W.boundary,rt=O+tt;y+=tt,rt!==0&&D-rt<W.storage&&(y+=D-rt),Y.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=W.storage}}}const b=y%D;return b>0&&(y+=D-b),T.__size=y,T.__cache={},this}function _(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function x(T){const A=T.target;A.removeEventListener("dispose",x);const y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function d(){for(const T in s)r.deleteBuffer(s[T]);o=[],s={},a={}}return{bind:h,update:u,dispose:d}}class $0{constructor(t={}){const{canvas:e=ju(),context:i=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let D=!1,b=0,w=0,F=null,S=-1,M=null;const B=new jt,Y=new jt;let n=null;const N=new At(0);let G=0,k=e.width,W=e.height,O=1,tt=null,rt=null;const mt=new jt(0,0,k,W),Mt=new jt(0,0,k,W);let ne=!1;const j=new Ya;let et=!1,xt=!1;this.transmissionResolutionScale=1;const at=new Ft,St=new Ft,qt=new P,Ct=new jt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function kt(){return F===null?O:1}let R=i;function Oe(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),R===null){const I="webgl2";if(R=Oe(I,E),R===null)throw Oe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,Ht,vt,se,_t,C,v,z,K,$,q,gt,ot,ct,Wt,Q,ft,Tt,bt,pt,Vt,It,ie,L;function it(){zt=new om(R),zt.init(),It=new G0(R,zt),Ht=new tm(R,zt,t,It),vt=new H0(R,zt),Ht.reverseDepthBuffer&&p&&vt.buffers.depth.setReversed(!0),se=new um(R),_t=new w0,C=new V0(R,zt,vt,_t,Ht,It,se),v=new nm(y),z=new am(y),K=new xf(R),ie=new Jd(R,K),$=new lm(R,K,se,ie),q=new fm(R,$,K,se),bt=new cm(R,Ht,C),Q=new em(_t),gt=new b0(y,v,z,zt,Ht,ie,Q),ot=new K0(y,_t),ct=new D0,Wt=new U0(zt),Tt=new $d(y,v,z,vt,q,m,h),ft=new k0(y,q,Ht),L=new Z0(R,se,Ht,vt),pt=new Qd(R,zt,se),Vt=new hm(R,zt,se),se.programs=gt.programs,y.capabilities=Ht,y.extensions=zt,y.properties=_t,y.renderLists=ct,y.shadowMap=ft,y.state=vt,y.info=se}it();const X=new q0(y,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(k,W,!1))},this.getSize=function(E){return E.set(k,W)},this.setSize=function(E,I,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,W=I,e.width=Math.floor(E*O),e.height=Math.floor(I*O),H===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(k*O,W*O).floor()},this.setDrawingBufferSize=function(E,I,H){k=E,W=I,O=H,e.width=Math.floor(E*H),e.height=Math.floor(I*H),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,I,H,V){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,I,H,V),vt.viewport(B.copy(mt).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(Mt)},this.setScissor=function(E,I,H,V){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,I,H,V),vt.scissor(Y.copy(Mt).multiplyScalar(O).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){vt.setScissorTest(ne=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,H=!0){let V=0;if(E){let U=!1;if(F!==null){const J=F.texture.format;U=J===Ha||J===za||J===ka}if(U){const J=F.texture.type,st=J===Sn||J===ei||J===ss||J===Pi||J===Ua||J===Na,ut=Tt.getClearColor(),dt=Tt.getClearAlpha(),wt=ut.r,Dt=ut.g,Et=ut.b;st?(g[0]=wt,g[1]=Dt,g[2]=Et,g[3]=dt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=wt,_[1]=Dt,_[2]=Et,_[3]=dt,R.clearBufferiv(R.COLOR,0,_))}else V|=R.COLOR_BUFFER_BIT}I&&(V|=R.DEPTH_BUFFER_BIT),H&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Tt.dispose(),ct.dispose(),Wt.dispose(),_t.dispose(),v.dispose(),z.dispose(),q.dispose(),ie.dispose(),L.dispose(),gt.dispose(),X.dispose(),X.removeEventListener("sessionstart",to),X.removeEventListener("sessionend",eo),kn.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=se.autoReset,I=ft.enabled,H=ft.autoUpdate,V=ft.needsUpdate,U=ft.type;it(),se.autoReset=E,ft.enabled=I,ft.autoUpdate=H,ft.needsUpdate=V,ft.type=U}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pt(E){const I=E.target;I.removeEventListener("dispose",Pt),le(I)}function le(E){Ee(E),_t.remove(E)}function Ee(E){const I=_t.get(E).programs;I!==void 0&&(I.forEach(function(H){gt.releaseProgram(H)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,H,V,U,J){I===null&&(I=ue);const st=U.isMesh&&U.matrixWorld.determinant()<0,ut=wh(E,I,H,V,U);vt.setMaterial(V,st);let dt=H.index,wt=1;if(V.wireframe===!0){if(dt=$.getWireframeAttribute(H),dt===void 0)return;wt=2}const Dt=H.drawRange,Et=H.attributes.position;let Xt=Dt.start*wt,Kt=(Dt.start+Dt.count)*wt;J!==null&&(Xt=Math.max(Xt,J.start*wt),Kt=Math.min(Kt,(J.start+J.count)*wt)),dt!==null?(Xt=Math.max(Xt,0),Kt=Math.min(Kt,dt.count)):Et!=null&&(Xt=Math.max(Xt,0),Kt=Math.min(Kt,Et.count));const ce=Kt-Xt;if(ce<0||ce===1/0)return;ie.setup(U,V,ut,H,dt);let he,Yt=pt;if(dt!==null&&(he=K.get(dt),Yt=Vt,Yt.setIndex(he)),U.isMesh)V.wireframe===!0?(vt.setLineWidth(V.wireframeLinewidth*kt()),Yt.setMode(R.LINES)):Yt.setMode(R.TRIANGLES);else if(U.isLine){let yt=V.linewidth;yt===void 0&&(yt=1),vt.setLineWidth(yt*kt()),U.isLineSegments?Yt.setMode(R.LINES):U.isLineLoop?Yt.setMode(R.LINE_LOOP):Yt.setMode(R.LINE_STRIP)}else U.isPoints?Yt.setMode(R.POINTS):U.isSprite&&Yt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)jn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const yt=U._multiDrawStarts,_e=U._multiDrawCounts,Zt=U._multiDrawCount,Xe=dt?K.get(dt).bytesPerElement:1,si=_t.get(V).currentProgram.getUniforms();for(let Le=0;Le<Zt;Le++)si.setValue(R,"_gl_DrawID",Le),Yt.render(yt[Le]/Xe,_e[Le])}else if(U.isInstancedMesh)Yt.renderInstances(Xt,ce,U.count);else if(H.isInstancedBufferGeometry){const yt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_e=Math.min(H.instanceCount,yt);Yt.renderInstances(Xt,ce,_e)}else Yt.render(Xt,ce)};function $t(E,I,H){E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Be,E.needsUpdate=!0,ps(E,I,H),E.side=yn,E.needsUpdate=!0,ps(E,I,H),E.side=tn):ps(E,I,H)}this.compile=function(E,I,H=null){H===null&&(H=E),d=Wt.get(H),d.init(I),A.push(d),H.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),E!==H&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const V=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let st=0;st<J.length;st++){const ut=J[st];$t(ut,H,U),V.add(ut)}else $t(J,H,U),V.add(J)}),d=A.pop(),V},this.compileAsync=function(E,I,H=null){const V=this.compile(E,I,H);return new Promise(U=>{function J(){if(V.forEach(function(st){_t.get(st).currentProgram.isReady()&&V.delete(st)}),V.size===0){U(E);return}setTimeout(J,10)}zt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let We=null;function hn(E){We&&We(E)}function to(){kn.stop()}function eo(){kn.start()}const kn=new Eh;kn.setAnimationLoop(hn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){We=E,X.setAnimationLoop(E),E===null?kn.stop():kn.start()},X.addEventListener("sessionstart",to),X.addEventListener("sessionend",eo),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,I,F),d=Wt.get(E,A.length),d.init(I),A.push(d),St.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),j.setFromProjectionMatrix(St),xt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,xt),x=ct.get(E,T.length),x.init(),T.push(x),X.enabled===!0&&X.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&sr(J,I,-1/0,y.sortObjects)}sr(E,I,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(tt,rt),ae=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ae&&Tt.addToRenderList(x,E),this.info.render.frame++,et===!0&&Q.beginShadows();const H=d.state.shadowsArray;ft.render(H,E,I),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,U=x.transmissive;if(d.setupLights(),I.isArrayCamera){const J=I.cameras;if(U.length>0)for(let st=0,ut=J.length;st<ut;st++){const dt=J[st];io(V,U,E,dt)}ae&&Tt.render(E);for(let st=0,ut=J.length;st<ut;st++){const dt=J[st];no(x,E,dt,dt.viewport)}}else U.length>0&&io(V,U,E,I),ae&&Tt.render(E),no(x,E,I);F!==null&&w===0&&(C.updateMultisampleRenderTarget(F),C.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(y,E,I),ie.resetDefaultState(),S=-1,M=null,A.pop(),A.length>0?(d=A[A.length-1],et===!0&&Q.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function sr(E,I,H,V){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){V&&Ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);const st=q.update(E),ut=E.material;ut.visible&&x.push(E,st,ut,H,Ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const st=q.update(E),ut=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ct.copy(E.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ct.copy(st.boundingSphere.center)),Ct.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(ut)){const dt=st.groups;for(let wt=0,Dt=dt.length;wt<Dt;wt++){const Et=dt[wt],Xt=ut[Et.materialIndex];Xt&&Xt.visible&&x.push(E,st,Xt,H,Ct.z,Et)}}else ut.visible&&x.push(E,st,ut,H,Ct.z,null)}}const J=E.children;for(let st=0,ut=J.length;st<ut;st++)sr(J[st],I,H,V)}function no(E,I,H,V){const U=E.opaque,J=E.transmissive,st=E.transparent;d.setupLightsView(H),et===!0&&Q.setGlobalState(y.clippingPlanes,H),V&&vt.viewport(B.copy(V)),U.length>0&&fs(U,I,H),J.length>0&&fs(J,I,H),st.length>0&&fs(st,I,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function io(E,I,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new ni(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ls:Sn,minFilter:_n,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const J=d.state.transmissionRenderTarget[V.id],st=V.viewport||B;J.setSize(st.z*y.transmissionResolutionScale,st.w*y.transmissionResolutionScale);const ut=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(N),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),ae&&Tt.render(H);const dt=y.toneMapping;y.toneMapping=Nn;const wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),et===!0&&Q.setGlobalState(y.clippingPlanes,V),fs(E,H,V),C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Et=0,Xt=I.length;Et<Xt;Et++){const Kt=I[Et],ce=Kt.object,he=Kt.geometry,Yt=Kt.material,yt=Kt.group;if(Yt.side===tn&&ce.layers.test(V.layers)){const _e=Yt.side;Yt.side=Be,Yt.needsUpdate=!0,so(ce,H,V,he,Yt,yt),Yt.side=_e,Yt.needsUpdate=!0,Dt=!0}}Dt===!0&&(C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J))}y.setRenderTarget(ut),y.setClearColor(N,G),wt!==void 0&&(V.viewport=wt),y.toneMapping=dt}function fs(E,I,H){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,J=E.length;U<J;U++){const st=E[U],ut=st.object,dt=st.geometry,wt=V===null?st.material:V,Dt=st.group;ut.layers.test(H.layers)&&so(ut,I,H,dt,wt,Dt)}}function so(E,I,H,V,U,J){E.onBeforeRender(y,I,H,V,U,J),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,I,H,V,E,J),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=Be,U.needsUpdate=!0,y.renderBufferDirect(H,I,V,U,E,J),U.side=yn,U.needsUpdate=!0,y.renderBufferDirect(H,I,V,U,E,J),U.side=tn):y.renderBufferDirect(H,I,V,U,E,J),E.onAfterRender(y,I,H,V,U,J)}function ps(E,I,H){I.isScene!==!0&&(I=ue);const V=_t.get(E),U=d.state.lights,J=d.state.shadowsArray,st=U.state.version,ut=gt.getParameters(E,U.state,J,I,H),dt=gt.getProgramCacheKey(ut);let wt=V.programs;V.environment=E.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(E.isMeshStandardMaterial?z:v).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",Pt),wt=new Map,V.programs=wt);let Dt=wt.get(dt);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===st)return ao(E,ut),Dt}else ut.uniforms=gt.getUniforms(E),E.onBeforeCompile(ut,y),Dt=gt.acquireProgram(ut,dt),wt.set(dt,Dt),V.uniforms=ut.uniforms;const Et=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=Q.uniform),ao(E,ut),V.needsLights=Dh(E),V.lightsStateVersion=st,V.needsLights&&(Et.ambientLightColor.value=U.state.ambient,Et.lightProbe.value=U.state.probe,Et.directionalLights.value=U.state.directional,Et.directionalLightShadows.value=U.state.directionalShadow,Et.spotLights.value=U.state.spot,Et.spotLightShadows.value=U.state.spotShadow,Et.rectAreaLights.value=U.state.rectArea,Et.ltc_1.value=U.state.rectAreaLTC1,Et.ltc_2.value=U.state.rectAreaLTC2,Et.pointLights.value=U.state.point,Et.pointLightShadows.value=U.state.pointShadow,Et.hemisphereLights.value=U.state.hemi,Et.directionalShadowMap.value=U.state.directionalShadowMap,Et.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Et.spotShadowMap.value=U.state.spotShadowMap,Et.spotLightMatrix.value=U.state.spotLightMatrix,Et.spotLightMap.value=U.state.spotLightMap,Et.pointShadowMap.value=U.state.pointShadowMap,Et.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function ro(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function ao(E,I){const H=_t.get(E);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function wh(E,I,H,V,U){I.isScene!==!0&&(I=ue),C.resetTextureUnits();const J=I.fog,st=V.isMeshStandardMaterial?I.environment:null,ut=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Re,dt=(V.isMeshStandardMaterial?z:v).get(V.envMap||st),wt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,Kt=!!H.morphAttributes.color;let ce=Nn;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ce=y.toneMapping);const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Yt=he!==void 0?he.length:0,yt=_t.get(V),_e=d.state.lights;if(et===!0&&(xt===!0||E!==M)){const Se=E===M&&V.id===S;Q.setState(V,E,Se)}let Zt=!1;V.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==_e.state.version||yt.outputColorSpace!==ut||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isBatchedMesh&&yt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&yt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==dt||V.fog===!0&&yt.fog!==J||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==wt||yt.vertexTangents!==Dt||yt.morphTargets!==Et||yt.morphNormals!==Xt||yt.morphColors!==Kt||yt.toneMapping!==ce||yt.morphTargetsCount!==Yt)&&(Zt=!0):(Zt=!0,yt.__version=V.version);let Xe=yt.currentProgram;Zt===!0&&(Xe=ps(V,I,U));let si=!1,Le=!1,Vi=!1;const re=Xe.getUniforms(),ke=yt.uniforms;if(vt.useProgram(Xe.program)&&(si=!0,Le=!0,Vi=!0),V.id!==S&&(S=V.id,Le=!0),si||M!==E){vt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),Zu(at),$u(at),re.setValue(R,"projectionMatrix",at)):re.setValue(R,"projectionMatrix",E.projectionMatrix),re.setValue(R,"viewMatrix",E.matrixWorldInverse);const De=re.map.cameraPosition;De!==void 0&&De.setValue(R,qt.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&re.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&re.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Le=!0,Vi=!0)}if(U.isSkinnedMesh){re.setOptional(R,U,"bindMatrix"),re.setOptional(R,U,"bindMatrixInverse");const Se=U.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),re.setValue(R,"boneTexture",Se.boneTexture,C))}U.isBatchedMesh&&(re.setOptional(R,U,"batchingTexture"),re.setValue(R,"batchingTexture",U._matricesTexture,C),re.setOptional(R,U,"batchingIdTexture"),re.setValue(R,"batchingIdTexture",U._indirectTexture,C),re.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(R,"batchingColorTexture",U._colorsTexture,C));const ze=H.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&bt.update(U,H,Xe),(Le||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,re.setValue(R,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ke.envMap.value=dt,ke.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(ke.envMapIntensity.value=I.environmentIntensity),Le&&(re.setValue(R,"toneMappingExposure",y.toneMappingExposure),yt.needsLights&&Rh(ke,Vi),J&&V.fog===!0&&ot.refreshFogUniforms(ke,J),ot.refreshMaterialUniforms(ke,V,O,W,d.state.transmissionRenderTarget[E.id]),js.upload(R,ro(yt),ke,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(js.upload(R,ro(yt),ke,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&re.setValue(R,"center",U.center),re.setValue(R,"modelViewMatrix",U.modelViewMatrix),re.setValue(R,"normalMatrix",U.normalMatrix),re.setValue(R,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Se=V.uniformsGroups;for(let De=0,rr=Se.length;De<rr;De++){const zn=Se[De];L.update(zn,Xe),L.bind(zn,Xe)}}return Xe}function Rh(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Dh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,I,H){_t.get(E.texture).__webglTexture=I,_t.get(E.depthTexture).__webglTexture=H;const V=_t.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const H=_t.get(E);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const Ph=R.createFramebuffer();this.setRenderTarget=function(E,I=0,H=0){F=E,b=I,w=H;let V=!0,U=null,J=!1,st=!1;if(E){const dt=_t.get(E);if(dt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(dt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(dt.__hasExternalTextures)C.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(dt.__boundDepthTexture!==Et){if(Et!==null&&_t.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(st=!0);const Dt=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?U=Dt[I][H]:U=Dt[I],J=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?U=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[H]:U=Dt,B.copy(E.viewport),Y.copy(E.scissor),n=E.scissorTest}else B.copy(mt).multiplyScalar(O).floor(),Y.copy(Mt).multiplyScalar(O).floor(),n=ne;if(H!==0&&(U=Ph),vt.bindFramebuffer(R.FRAMEBUFFER,U)&&V&&vt.drawBuffers(E,U),vt.viewport(B),vt.scissor(Y),vt.setScissorTest(n),J){const dt=_t.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,dt.__webglTexture,H)}else if(st){const dt=_t.get(E.texture),wt=I;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,dt.__webglTexture,H,wt)}else if(E!==null&&H!==0){const dt=_t.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dt.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(E,I,H,V,U,J,st){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){vt.bindFramebuffer(R.FRAMEBUFFER,ut);try{const dt=E.texture,wt=dt.format,Dt=dt.type;if(!Ht.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-V&&H>=0&&H<=E.height-U&&R.readPixels(I,H,V,U,It.convert(wt),It.convert(Dt),J)}finally{const dt=F!==null?_t.get(F).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(E,I,H,V,U,J,st){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){const dt=E.texture,wt=dt.format,Dt=dt.type;if(!Ht.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-V&&H>=0&&H<=E.height-U){vt.bindFramebuffer(R.FRAMEBUFFER,ut);const Et=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Et),R.bufferData(R.PIXEL_PACK_BUFFER,J.byteLength,R.STREAM_READ),R.readPixels(I,H,V,U,It.convert(wt),It.convert(Dt),0);const Xt=F!==null?_t.get(F).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,Xt);const Kt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ku(R,Kt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Et),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,J),R.deleteBuffer(Et),R.deleteSync(Kt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,I=null,H=0){E.isTexture!==!0&&(jn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),U=Math.floor(E.image.width*V),J=Math.floor(E.image.height*V),st=I!==null?I.x:0,ut=I!==null?I.y:0;C.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,st,ut,U,J),vt.unbindTexture()};const Bh=R.createFramebuffer(),Lh=R.createFramebuffer();this.copyTextureToTexture=function(E,I,H=null,V=null,U=0,J=null){E.isTexture!==!0&&(jn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],I=arguments[2],J=arguments[3]||0,H=null),J===null&&(U!==0?(jn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let st,ut,dt,wt,Dt,Et,Xt,Kt,ce;const he=E.isCompressedTexture?E.mipmaps[J]:E.image;if(H!==null)st=H.max.x-H.min.x,ut=H.max.y-H.min.y,dt=H.isBox3?H.max.z-H.min.z:1,wt=H.min.x,Dt=H.min.y,Et=H.isBox3?H.min.z:0;else{const ze=Math.pow(2,-U);st=Math.floor(he.width*ze),ut=Math.floor(he.height*ze),E.isDataArrayTexture?dt=he.depth:E.isData3DTexture?dt=Math.floor(he.depth*ze):dt=1,wt=0,Dt=0,Et=0}V!==null?(Xt=V.x,Kt=V.y,ce=V.z):(Xt=0,Kt=0,ce=0);const Yt=It.convert(I.format),yt=It.convert(I.type);let _e;I.isData3DTexture?(C.setTexture3D(I,0),_e=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(C.setTexture2DArray(I,0),_e=R.TEXTURE_2D_ARRAY):(C.setTexture2D(I,0),_e=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Zt=R.getParameter(R.UNPACK_ROW_LENGTH),Xe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),si=R.getParameter(R.UNPACK_SKIP_PIXELS),Le=R.getParameter(R.UNPACK_SKIP_ROWS),Vi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,he.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Et);const re=E.isDataArrayTexture||E.isData3DTexture,ke=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const ze=_t.get(E),Se=_t.get(I),De=_t.get(ze.__renderTarget),rr=_t.get(Se.__renderTarget);vt.bindFramebuffer(R.READ_FRAMEBUFFER,De.__webglFramebuffer),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let zn=0;zn<dt;zn++)re&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,U,Et+zn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(I).__webglTexture,J,ce+zn)),R.blitFramebuffer(wt,Dt,st,ut,Xt,Kt,st,ut,R.DEPTH_BUFFER_BIT,R.NEAREST);vt.bindFramebuffer(R.READ_FRAMEBUFFER,null),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||_t.has(E)){const ze=_t.get(E),Se=_t.get(I);vt.bindFramebuffer(R.READ_FRAMEBUFFER,Bh),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Lh);for(let De=0;De<dt;De++)re?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ze.__webglTexture,U,Et+De):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ze.__webglTexture,U),ke?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Se.__webglTexture,J,ce+De):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Se.__webglTexture,J),U!==0?R.blitFramebuffer(wt,Dt,st,ut,Xt,Kt,st,ut,R.COLOR_BUFFER_BIT,R.NEAREST):ke?R.copyTexSubImage3D(_e,J,Xt,Kt,ce+De,wt,Dt,st,ut):R.copyTexSubImage2D(_e,J,Xt,Kt,wt,Dt,st,ut);vt.bindFramebuffer(R.READ_FRAMEBUFFER,null),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ke?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(_e,J,Xt,Kt,ce,st,ut,dt,Yt,yt,he.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(_e,J,Xt,Kt,ce,st,ut,dt,Yt,he.data):R.texSubImage3D(_e,J,Xt,Kt,ce,st,ut,dt,Yt,yt,he):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,J,Xt,Kt,st,ut,Yt,yt,he.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,J,Xt,Kt,he.width,he.height,Yt,he.data):R.texSubImage2D(R.TEXTURE_2D,J,Xt,Kt,st,ut,Yt,yt,he);R.pixelStorei(R.UNPACK_ROW_LENGTH,Zt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Xe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,si),R.pixelStorei(R.UNPACK_SKIP_ROWS,Le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vi),J===0&&I.generateMipmaps&&R.generateMipmap(_e),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,I,H=null,V=null,U=0){return E.isTexture!==!0&&(jn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0),jn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,H,V,U)},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){b=0,w=0,F=null,vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}const Dl={type:"change"},Qa={type:"start"},Th={type:"end"},Hs=new hs,Pl=new Bn,J0=Math.cos(70*eh.DEG2RAD),pe=new P,Pe=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zr=1e-6;class Q0 extends df{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new nn,this._lastTargetPosition=new P,this._quat=new nn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sl,this._sphericalDelta=new sl,this._scale=1,this._panOffset=new P,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new P,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ex.bind(this),this._onPointerDown=tx.bind(this),this._onPointerUp=nx.bind(this),this._onContextMenu=hx.bind(this),this._onMouseWheel=rx.bind(this),this._onKeyDown=ax.bind(this),this._onTouchStart=ox.bind(this),this._onTouchMove=lx.bind(this),this._onMouseDown=ix.bind(this),this._onMouseMove=sx.bind(this),this._interceptControlDown=ux.bind(this),this._interceptControlUp=cx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dl),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;pe.copy(e).sub(this.target),pe.applyQuaternion(this._quat),this._spherical.setFromVector3(pe),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Pe:i>Math.PI&&(i-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(pe.setFromSpherical(this._spherical),pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=pe.length();o=this._clampDistance(l*this._scale);const h=l-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;const u=new P(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),o=pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hs.origin.copy(this.object.position),Hs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hs.direction))<J0?this.object.lookAt(this.target):(Pl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hs.intersectPlane(Pl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>zr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zr||this._lastTargetPosition.distanceToSquared(this.target)>zr?(this.dispatchEvent(Dl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pe.setFromMatrixColumn(e,0),pe.multiplyScalar(-t),this._panOffset.add(pe)}_panUp(t,e){this.screenSpacePanning===!0?pe.setFromMatrixColumn(e,1):(pe.setFromMatrixColumn(e,0),pe.crossVectors(this.object.up,pe)),pe.multiplyScalar(t),this._panOffset.add(pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pe.copy(s).sub(this.target);let a=pe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,a=e-i.top,o=i.width,l=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function tx(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ex(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function nx(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Th),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ix(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ee.DOLLY;break;case yi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ee.ROTATE}break;case yi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Qa)}function sx(r){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function rx(r){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(r.preventDefault(),this.dispatchEvent(Qa),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Th))}function ax(r){this.enabled!==!1&&this._handleKeyDown(r)}function ox(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ee.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ee.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Qa)}function lx(r){switch(this._trackPointer(r),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ee.NONE}}function hx(r){this.enabled!==!1&&r.preventDefault()}function ux(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cx(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bl(r,t){if(t===Mu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===ba||t===Jl){let e=r.getIndex();if(e===null){const o=[],l=r.getAttribute("position");if(l!==void 0){for(let h=0;h<l.count;h++)o.push(h);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=e.count-2,s=[];if(t===ba)for(let o=1;o<=i;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=r.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class fx extends zi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new gx(e)}),this.register(function(e){return new _x(e)}),this.register(function(e){return new bx(e)}),this.register(function(e){return new wx(e)}),this.register(function(e){return new Rx(e)}),this.register(function(e){return new Ex(e)}),this.register(function(e){return new Mx(e)}),this.register(function(e){return new yx(e)}),this.register(function(e){return new Sx(e)}),this.register(function(e){return new xx(e)}),this.register(function(e){return new Ax(e)}),this.register(function(e){return new vx(e)}),this.register(function(e){return new Cx(e)}),this.register(function(e){return new Tx(e)}),this.register(function(e){return new dx(e)}),this.register(function(e){return new Dx(e)}),this.register(function(e){return new Px(e)})}load(t,e,i,s){const a=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=is.extractUrlBase(t);o=is.resolveURL(u,this.path)}else o=is.extractUrlBase(t);this.manager.itemStart(t);const l=function(u){s?s(u):console.error(u),a.manager.itemError(t),a.manager.itemEnd(t)},h=new _h(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(u){try{a.parse(u,o,function(c){e(c),a.manager.itemEnd(t)},l)}catch(c){l(c)}},i,l)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,s){let a;const o={},l={},h=new TextDecoder;if(typeof t=="string")a=JSON.parse(t);else if(t instanceof ArrayBuffer)if(h.decode(new Uint8Array(t,0,4))===Ch){try{o[Ot.KHR_BINARY_GLTF]=new Bx(t)}catch(f){s&&s(f);return}a=JSON.parse(o[Ot.KHR_BINARY_GLTF].content)}else a=JSON.parse(h.decode(t));else a=t;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Xx(a,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,o[f.name]=!0}if(a.extensionsUsed)for(let c=0;c<a.extensionsUsed.length;++c){const f=a.extensionsUsed[c],p=a.extensionsRequired||[];switch(f){case Ot.KHR_MATERIALS_UNLIT:o[f]=new mx;break;case Ot.KHR_DRACO_MESH_COMPRESSION:o[f]=new Lx(a,this.dracoLoader);break;case Ot.KHR_TEXTURE_TRANSFORM:o[f]=new Fx;break;case Ot.KHR_MESH_QUANTIZATION:o[f]=new Ix;break;default:p.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(o),u.setPlugins(l),u.parse(i,s)}parseAsync(t,e){const i=this;return new Promise(function(s,a){i.parse(t,e,s,a)})}}function px(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dx{constructor(t){this.parser=t,this.name=Ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,s=e.length;i<s;i++){const a=e[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let s=e.cache.get(i);if(s)return s;const a=e.json,h=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t];let u;const c=new At(16777215);h.color!==void 0&&c.setRGB(h.color[0],h.color[1],h.color[2],Re);const f=h.range!==void 0?h.range:0;switch(h.type){case"directional":u=new vh(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Qc(c),u.distance=f;break;case"spot":u=new $c(c),u.distance=f,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,u.angle=h.spot.outerConeAngle,u.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return u.position.set(0,0,0),gn(u,h),h.intensity!==void 0&&(u.intensity=h.intensity),u.name=e.createUniqueName(h.name||"light_"+t),s=Promise.resolve(u),e.cache.add(i,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,a=i.json.nodes[t],l=(a.extensions&&a.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(h){return i._getNodeRef(e.cache,l,h)})}}class mx{constructor(){this.name=Ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(t,e,i){const s=[];t.color=new At(1,1,1),t.opacity=1;const a=e.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const o=a.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Re),t.opacity=o[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(t,"map",a.baseColorTexture,ve))}return Promise.all(s)}}class xx{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(e.emissiveIntensity=a),Promise.resolve()}}class gx{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&a.push(i.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Rt(l,l)}return Promise.all(a)}}class _x{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return e.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class vx{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&a.push(i.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(a)}}class Ex{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];e.sheenColor=new At(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;e.sheenColor.setRGB(l[0],l[1],l[2],Re)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&a.push(i.assignTexture(e,"sheenColorMap",o.sheenColorTexture,ve)),o.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(a)}}class Mx{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&a.push(i.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(a)}}class yx{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&a.push(i.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return e.attenuationColor=new At().setRGB(l[0],l[1],l[2],Re),Promise.all(a)}}class Sx{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return e.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Ax{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&a.push(i.assignTexture(e,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return e.specularColor=new At().setRGB(l[0],l[1],l[2],Re),o.specularColorTexture!==void 0&&a.push(i.assignTexture(e,"specularColorMap",o.specularColorTexture,ve)),Promise.all(a)}}class Tx{constructor(t){this.parser=t,this.name=Ot.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&a.push(i.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(a)}}class Cx{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:on}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&a.push(i.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(a)}}class bx{constructor(t){this.parser=t,this.name=Ot.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,s=i.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,a.source,o)}}class wx{constructor(t){this.parser=t,this.name=Ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,s=i.json,a=s.textures[t];if(!a.extensions||!a.extensions[e])return null;const o=a.extensions[e],l=s.images[o.source];let h=i.textureLoader;if(l.uri){const u=i.options.manager.getHandler(l.uri);u!==null&&(h=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(t,o.source,h);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Rx{constructor(t){this.parser=t,this.name=Ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,s=i.json,a=s.textures[t];if(!a.extensions||!a.extensions[e])return null;const o=a.extensions[e],l=s.images[o.source];let h=i.textureLoader;if(l.uri){const u=i.options.manager.getHandler(l.uri);u!==null&&(h=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(t,o.source,h);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Dx{constructor(t){this.name=Ot.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(l){const h=s.byteOffset||0,u=s.byteLength||0,c=s.count,f=s.byteStride,p=new Uint8Array(l,h,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(c,f,p,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(c*f);return o.decodeGltfBuffer(new Uint8Array(m),c,f,p,s.mode,s.filter),m})})}else return null}}class Px{constructor(t){this.name=Ot.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=e.meshes[i.mesh];for(const u of s.primitives)if(u.mode!==Ve.TRIANGLES&&u.mode!==Ve.TRIANGLE_STRIP&&u.mode!==Ve.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,l=[],h={};for(const u in o)l.push(this.parser.getDependency("accessor",o[u]).then(c=>(h[u]=c,h[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(t)),Promise.all(l).then(u=>{const c=u.pop(),f=c.isGroup?c.children:[c],p=u[0].count,m=[];for(const g of f){const _=new Ft,x=new P,d=new nn,T=new P(1,1,1),A=new wc(g.geometry,g.material,p);for(let y=0;y<p;y++)h.TRANSLATION&&x.fromBufferAttribute(h.TRANSLATION,y),h.ROTATION&&d.fromBufferAttribute(h.ROTATION,y),h.SCALE&&T.fromBufferAttribute(h.SCALE,y),A.setMatrixAt(y,_.compose(x,d,T));for(const y in h)if(y==="_COLOR_0"){const D=h[y];A.instanceColor=new Ra(D.array,D.itemSize,D.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,h[y]);oe.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),m.push(A)}return c.isGroup?(c.clear(),c.add(...m),c):m[0]}))}}const Ch="glTF",Ji=12,Ll={JSON:1313821514,BIN:5130562};class Bx{constructor(t){this.name=Ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ji),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ch)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ji,a=new DataView(t,Ji);let o=0;for(;o<s;){const l=a.getUint32(o,!0);o+=4;const h=a.getUint32(o,!0);if(o+=4,h===Ll.JSON){const u=new Uint8Array(t,Ji+o,l);this.content=i.decode(u)}else if(h===Ll.BIN){const u=Ji+o;this.body=t.slice(u,u+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Lx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ot.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,s=this.dracoLoader,a=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,l={},h={},u={};for(const c in o){const f=Ba[c]||c.toLowerCase();l[f]=o[c]}for(const c in t.attributes){const f=Ba[c]||c.toLowerCase();if(o[c]!==void 0){const p=i.accessors[t.attributes[c]],m=Ci[p.componentType];u[f]=m.name,h[f]=p.normalized===!0}}return e.getDependency("bufferView",a).then(function(c){return new Promise(function(f,p){s.decodeDracoFile(c,function(m){for(const g in m.attributes){const _=m.attributes[g],x=h[g];x!==void 0&&(_.normalized=x)}f(m)},l,u,Re,p)})})}}class Fx{constructor(){this.name=Ot.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Ix{constructor(){this.name=Ot.KHR_MESH_QUANTIZATION}}class bh extends cs{constructor(t,e,i,s){super(t,e,i,s)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s*3+s;for(let o=0;o!==s;o++)e[o]=i[a+o];return e}interpolate_(t,e,i,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,h=l*2,u=l*3,c=s-e,f=(i-e)/c,p=f*f,m=p*f,g=t*u,_=g-u,x=-2*m+3*p,d=m-p,T=1-x,A=d-p+f;for(let y=0;y!==l;y++){const D=o[_+y+l],b=o[_+y+h]*c,w=o[g+y+l],F=o[g+y]*c;a[y]=T*D+A*b+x*w+d*F}return a}}const Ux=new nn;class Nx extends bh{interpolate_(t,e,i,s){const a=super.interpolate_(t,e,i,s);return Ux.fromArray(a).normalize().toArray(a),a}}const Ve={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ci={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fl={9728:be,9729:Ue,9984:Vl,9985:Vs,9986:Qi,9987:_n},Il={33071:Fn,33648:Ks,10497:Di},Hr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ba={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ox={CUBICSPLINE:void 0,LINEAR:as,STEP:rs},Vr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yn})),r.DefaultMaterial}function qn(r,t,e){for(const i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function gn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function zx(r,t,e){let i=!1,s=!1,a=!1;for(let u=0,c=t.length;u<c;u++){const f=t[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(r);const o=[],l=[],h=[];for(let u=0,c=t.length;u<c;u++){const f=t[u];if(i){const p=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):r.attributes.position;o.push(p)}if(s){const p=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):r.attributes.normal;l.push(p)}if(a){const p=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):r.attributes.color;h.push(p)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(u){const c=u[0],f=u[1],p=u[2];return i&&(r.morphAttributes.position=c),s&&(r.morphAttributes.normal=f),a&&(r.morphAttributes.color=p),r.morphTargetsRelative=!0,r})}function Hx(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,s=e.length;i<s;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vx(r){let t;const e=r.extensions&&r.extensions[Ot.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Gr(e.attributes):t=r.indices+":"+Gr(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,s=r.targets.length;i<s;i++)t+=":"+Gr(r.targets[i]);return t}function Gr(r){let t="";const e=Object.keys(r).sort();for(let i=0,s=e.length;i<s;i++)t+=e[i]+":"+r[e[i]]+";";return t}function La(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wx=new Ft;class Xx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new px,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,o=-1;if(typeof navigator<"u"){const l=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(l)===!0;const h=l.match(/Version\/(\d+)/);s=i&&h?parseInt(h[1],10):-1,a=l.indexOf("Firefox")>-1,o=a?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&o<98?this.textureLoader=new Kc(this.options.manager):this.textureLoader=new nf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _h(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return qn(a,l,s),gn(l,s),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(l)})).then(function(){for(const h of l.scenes)h.updateMatrixWorld();t(l)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=e.length;s<a;s++){const o=e[s].joints;for(let l=0,h=o.length;l<h;l++)t[o[l]].isBone=!0}for(let s=0,a=t.length;s<a;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const s=i.clone(),a=(o,l)=>{const h=this.associations.get(o);h!=null&&this.associations.set(l,h);for(const[u,c]of o.children.entries())a(c,l.children[u])};return a(i,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const s=t(e[i]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let s=0;s<e.length;s++){const a=t(e[s]);a&&i.push(a)}return i}getDependency(t,e){const i=t+":"+e;let s=this.cache.get(i);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(e)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(i,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(a,o){return i.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,o){i.load(is.resolveURL(e.uri,s.path),a,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const s=e.byteLength||0,a=e.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(t){const e=this,i=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Hr[s.type],l=Ci[s.componentType],h=s.normalized===!0,u=new l(s.count*o);return Promise.resolve(new we(u,o,h))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(o){const l=o[0],h=Hr[s.type],u=Ci[s.componentType],c=u.BYTES_PER_ELEMENT,f=c*h,p=s.byteOffset||0,m=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,x;if(m&&m!==f){const d=Math.floor(p/m),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let A=e.cache.get(T);A||(_=new u(l,d*m,s.count*m/c),A=new Sc(_,m/c),e.cache.add(T,A)),x=new Wa(A,h,p%m/c,g)}else l===null?_=new u(s.count*h):_=new u(l,p,s.count*h),x=new we(_,h,g);if(s.sparse!==void 0){const d=Hr.SCALAR,T=Ci[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,D=new T(o[1],A,s.sparse.count*d),b=new u(o[2],y,s.sparse.count*h);l!==null&&(x=new we(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let w=0,F=D.length;w<F;w++){const S=D[w];if(x.setX(S,b[w*h]),h>=2&&x.setY(S,b[w*h+1]),h>=3&&x.setZ(S,b[w*h+2]),h>=4&&x.setW(S,b[w*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(t){const e=this.json,i=this.options,a=e.textures[t].source,o=e.images[a];let l=this.textureLoader;if(o.uri){const h=i.manager.getHandler(o.uri);h!==null&&(l=h)}return this.loadTextureImage(t,a,l)}loadTextureImage(t,e,i){const s=this,a=this.json,o=a.textures[t],l=a.images[e],h=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[h])return this.textureCache[h];const u=this.loadImageSource(e,i).then(function(c){c.flipY=!1,c.name=o.name||l.name||"",c.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(c.name=l.uri);const p=(a.samplers||{})[o.sampler]||{};return c.magFilter=Fl[p.magFilter]||Ue,c.minFilter=Fl[p.minFilter]||_n,c.wrapS=Il[p.wrapS]||Di,c.wrapT=Il[p.wrapT]||Di,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==be&&c.minFilter!==Ue,s.associations.set(c,{textures:t}),c}).catch(function(){return null});return this.textureCache[h]=u,u}loadImageSource(t,e){const i=this,s=this.json,a=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const o=s.images[t],l=self.URL||self.webkitURL;let h=o.uri||"",u=!1;if(o.bufferView!==void 0)h=i.getDependency("bufferView",o.bufferView).then(function(f){u=!0;const p=new Blob([f],{type:o.mimeType});return h=l.createObjectURL(p),h});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const c=Promise.resolve(h).then(function(f){return new Promise(function(p,m){let g=p;e.isImageBitmapLoader===!0&&(g=function(_){const x=new ge(_);x.needsUpdate=!0,p(x)}),e.load(is.resolveURL(f,a.path),g,void 0,m)})}).then(function(f){return u===!0&&l.revokeObjectURL(h),gn(f,o),f.userData.mimeType=o.mimeType||Gx(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),f});return this.sourceCache[t]=c,c}assignTexture(t,e,i,s){const a=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),a.extensions[Ot.KHR_TEXTURE_TRANSFORM]){const l=i.extensions!==void 0?i.extensions[Ot.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const h=a.associations.get(o);o=a.extensions[Ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),a.associations.set(o,h)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const s=e.attributes.tangent===void 0,a=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const l="PointsMaterial:"+i.uuid;let h=this.cache.get(l);h||(h=new dh,en.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(l,h)),i=h}else if(t.isLine){const l="LineBasicMaterial:"+i.uuid;let h=this.cache.get(l);h||(h=new ph,en.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(l,h)),i=h}if(s||a||o){let l="ClonedMaterial:"+i.uuid+":";s&&(l+="derivative-tangents:"),a&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let h=this.cache.get(l);h||(h=i.clone(),a&&(h.vertexColors=!0),o&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(l,h),this.associations.set(h,this.associations.get(i))),i=h}t.material=i}getMaterialType(){return ti}loadMaterial(t){const e=this,i=this.json,s=this.extensions,a=i.materials[t];let o;const l={},h=a.extensions||{},u=[];if(h[Ot.KHR_MATERIALS_UNLIT]){const f=s[Ot.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),u.push(f.extendParams(l,a,e))}else{const f=a.pbrMetallicRoughness||{};if(l.color=new At(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const p=f.baseColorFactor;l.color.setRGB(p[0],p[1],p[2],Re),l.opacity=p[3]}f.baseColorTexture!==void 0&&u.push(e.assignTexture(l,"map",f.baseColorTexture,ve)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),u.push(e.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(t,l)})))}a.doubleSided===!0&&(l.side=tn);const c=a.alphaMode||Vr.OPAQUE;if(c===Vr.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,c===Vr.MASK&&(l.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&o!==Jn&&(u.push(e.assignTexture(l,"normalMap",a.normalTexture)),l.normalScale=new Rt(1,1),a.normalTexture.scale!==void 0)){const f=a.normalTexture.scale;l.normalScale.set(f,f)}if(a.occlusionTexture!==void 0&&o!==Jn&&(u.push(e.assignTexture(l,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==Jn){const f=a.emissiveFactor;l.emissive=new At().setRGB(f[0],f[1],f[2],Re)}return a.emissiveTexture!==void 0&&o!==Jn&&u.push(e.assignTexture(l,"emissiveMap",a.emissiveTexture,ve)),Promise.all(u).then(function(){const f=new o(l);return a.name&&(f.name=a.name),gn(f,a),e.associations.set(f,{materials:t}),a.extensions&&qn(s,f,a),f})}createUniqueName(t){const e=Qt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,s=this.primitiveCache;function a(l){return i[Ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,e).then(function(h){return Ul(h,l,e)})}const o=[];for(let l=0,h=t.length;l<h;l++){const u=t[l],c=Vx(u),f=s[c];if(f)o.push(f.promise);else{let p;u.extensions&&u.extensions[Ot.KHR_DRACO_MESH_COMPRESSION]?p=a(u):p=Ul(new an,u,e),s[c]={primitive:u,promise:p},o.push(p)}}return Promise.all(o)}loadMesh(t){const e=this,i=this.json,s=this.extensions,a=i.meshes[t],o=a.primitives,l=[];for(let h=0,u=o.length;h<u;h++){const c=o[h].material===void 0?kx(this.cache):this.getDependency("material",o[h].material);l.push(c)}return l.push(e.loadGeometries(o)),Promise.all(l).then(function(h){const u=h.slice(0,h.length-1),c=h[h.length-1],f=[];for(let m=0,g=c.length;m<g;m++){const _=c[m],x=o[m];let d;const T=u[m];if(x.mode===Ve.TRIANGLES||x.mode===Ve.TRIANGLE_STRIP||x.mode===Ve.TRIANGLE_FAN||x.mode===void 0)d=a.isSkinnedMesh===!0?new Tc(_,T):new Ne(_,T),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),x.mode===Ve.TRIANGLE_STRIP?d.geometry=Bl(d.geometry,Jl):x.mode===Ve.TRIANGLE_FAN&&(d.geometry=Bl(d.geometry,ba));else if(x.mode===Ve.LINES)d=new Pc(_,T);else if(x.mode===Ve.LINE_STRIP)d=new qa(_,T);else if(x.mode===Ve.LINE_LOOP)d=new Bc(_,T);else if(x.mode===Ve.POINTS)d=new Lc(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(d.geometry.morphAttributes).length>0&&Hx(d,a),d.name=e.createUniqueName(a.name||"mesh_"+t),gn(d,a),x.extensions&&qn(s,d,x),e.assignFinalMaterial(d),f.push(d)}for(let m=0,g=f.length;m<g;m++)e.associations.set(f[m],{meshes:t,primitives:m});if(f.length===1)return a.extensions&&qn(s,f[0],a),f[0];const p=new Qn;a.extensions&&qn(s,p,a),e.associations.set(p,{meshes:t});for(let m=0,g=f.length;m<g;m++)p.add(f[m]);return p})}loadCamera(t){let e;const i=this.json.cameras[t],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Ce(eh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(e=new Ka(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),gn(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let s=0,a=e.joints.length;s<a;s++)i.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),o=s,l=[],h=[];for(let u=0,c=o.length;u<c;u++){const f=o[u];if(f){l.push(f);const p=new Ft;a!==null&&p.fromArray(a.array,u*16),h.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new Xa(l,h)})}loadAnimation(t){const e=this.json,i=this,s=e.animations[t],a=s.name?s.name:"animation_"+t,o=[],l=[],h=[],u=[],c=[];for(let f=0,p=s.channels.length;f<p;f++){const m=s.channels[f],g=s.samplers[m.sampler],_=m.target,x=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",d)),h.push(this.getDependency("accessor",T)),u.push(g),c.push(_))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(u),Promise.all(c)]).then(function(f){const p=f[0],m=f[1],g=f[2],_=f[3],x=f[4],d=[];for(let T=0,A=p.length;T<A;T++){const y=p[T],D=m[T],b=g[T],w=_[T],F=x[T];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=i._createAnimationTracks(y,D,b,w,F);if(S)for(let M=0;M<S.length;M++)d.push(S[M])}return new Vc(a,void 0,d)})}createNodeMesh(t){const e=this.json,i=this,s=e.nodes[t];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const o=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let h=0,u=s.weights.length;h<u;h++)l.morphTargetInfluences[h]=s.weights[h]}),o})}loadNode(t){const e=this.json,i=this,s=e.nodes[t],a=i._loadNodeShallow(t),o=[],l=s.children||[];for(let u=0,c=l.length;u<c;u++)o.push(i.getDependency("node",l[u]));const h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(o),h]).then(function(u){const c=u[0],f=u[1],p=u[2];p!==null&&c.traverse(function(m){m.isSkinnedMesh&&m.bind(p,Wx)});for(let m=0,g=f.length;m<g;m++)c.add(f[m]);return c})}_loadNodeShallow(t){const e=this.json,i=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const a=e.nodes[t],o=a.name?s.createUniqueName(a.name):"",l=[],h=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return h&&l.push(h),a.camera!==void 0&&l.push(s.getDependency("camera",a.camera).then(function(u){return s._getNodeRef(s.cameraCache,a.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){l.push(u)}),this.nodeCache[t]=Promise.all(l).then(function(u){let c;if(a.isBone===!0?c=new ch:u.length>1?c=new Qn:u.length===1?c=u[0]:c=new oe,c!==u[0])for(let f=0,p=u.length;f<p;f++)c.add(u[f]);if(a.name&&(c.userData.name=a.name,c.name=o),gn(c,a),a.extensions&&qn(i,c,a),a.matrix!==void 0){const f=new Ft;f.fromArray(a.matrix),c.applyMatrix4(f)}else a.translation!==void 0&&c.position.fromArray(a.translation),a.rotation!==void 0&&c.quaternion.fromArray(a.rotation),a.scale!==void 0&&c.scale.fromArray(a.scale);return s.associations.has(c)||s.associations.set(c,{}),s.associations.get(c).nodes=t,c}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],s=this,a=new Qn;i.name&&(a.name=s.createUniqueName(i.name)),gn(a,i),i.extensions&&qn(e,a,i);const o=i.nodes||[],l=[];for(let h=0,u=o.length;h<u;h++)l.push(s.getDependency("node",o[h]));return Promise.all(l).then(function(h){for(let c=0,f=h.length;c<f;c++)a.add(h[c]);const u=c=>{const f=new Map;for(const[p,m]of s.associations)(p instanceof en||p instanceof ge)&&f.set(p,m);return c.traverse(p=>{const m=s.associations.get(p);m!=null&&f.set(p,m)}),f};return s.associations=u(a),a})}_createAnimationTracks(t,e,i,s,a){const o=[],l=t.name?t.name:t.uuid,h=[];Pn[a.path]===Pn.weights?t.traverse(function(p){p.morphTargetInfluences&&h.push(p.name?p.name:p.uuid)}):h.push(l);let u;switch(Pn[a.path]){case Pn.weights:u=Ii;break;case Pn.rotation:u=Ui;break;case Pn.position:case Pn.scale:u=Ni;break;default:switch(i.itemSize){case 1:u=Ii;break;case 2:case 3:default:u=Ni;break}break}const c=s.interpolation!==void 0?Ox[s.interpolation]:as,f=this._getArrayFromAccessor(i);for(let p=0,m=h.length;p<m;p++){const g=new u(h[p]+"."+Pn[a.path],e.array,f,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=La(e.constructor),s=new Float32Array(e.length);for(let a=0,o=e.length;a<o;a++)s[a]=e[a]*i;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const s=this instanceof Ui?Nx:bh;return new s(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Yx(r,t,e){const i=t.attributes,s=new An;if(i.POSITION!==void 0){const l=e.json.accessors[i.POSITION],h=l.min,u=l.max;if(h!==void 0&&u!==void 0){if(s.set(new P(h[0],h[1],h[2]),new P(u[0],u[1],u[2])),l.normalized){const c=La(Ci[l.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=t.targets;if(a!==void 0){const l=new P,h=new P;for(let u=0,c=a.length;u<c;u++){const f=a[u];if(f.POSITION!==void 0){const p=e.json.accessors[f.POSITION],m=p.min,g=p.max;if(m!==void 0&&g!==void 0){if(h.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),h.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),h.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),p.normalized){const _=La(Ci[p.componentType]);h.multiplyScalar(_)}l.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}r.boundingBox=s;const o=new rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=o}function Ul(r,t,e){const i=t.attributes,s=[];function a(o,l){return e.getDependency("accessor",o).then(function(h){r.setAttribute(l,h)})}for(const o in i){const l=Ba[o]||o.toLowerCase();l in r.attributes||s.push(a(i[o],l))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(l){r.setIndex(l)});s.push(o)}return Gt.workingColorSpace!==Re&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gt.workingColorSpace}" not supported.`),gn(r,t),Yx(r,t,e),Promise.all(s).then(function(){return t.targets!==void 0?zx(r,t.targets,e):r})}const qx=document.getElementById("remix-description").innerHTML;window.s3_remix_modal_controller={openModal:()=>{},closeModal:()=>{},isOpen:!1};const jx=()=>{var x,d;const r=(x=window==null?void 0:window.s3_remix_config)==null?void 0:x.modelPath,t=window==null?void 0:window.s3_product_type,e=t==="Badminton Racket"?"Racket":t==="Pickleball Paddle"?"Paddle":"",i=t==="Pickleball Paddle"?12:8,s=oo(null),a=oo(null),[o,l]=Gi(!0),[h,u]=Gi(""),[c,f]=Gi(!0),[p,m]=Gi(!0),[g,_]=Gi("");return lo(()=>{l(!0),window.s3_remix_modal_controller&&(window.s3_remix_modal_controller.openModal=()=>m(!0),window.s3_remix_modal_controller.closeModal=()=>m(!1),window.s3_remix_modal_controller.isOpen=p);let T=null,A=null,y=null,D=null,b=null,w=null;if(!r){console.error("No 3D model URL provided");return}try{(async()=>{b=new yc,b.background=new At(16448250);const F=new Ce(20,window.innerWidth/window.innerHeight,.1,1e3);F.lookAt(0,0,0),F.position.set(0,0,10),A=new $0({antialias:!0}),A.setPixelRatio(window.devicePixelRatio),A.shadowMap.enabled=!0;const S=document.getElementById("model");S&&(S.innerHTML="",S.style.height="100vh",S.style.width="100vw",A.setSize(window.innerWidth,window.innerHeight),S.appendChild(A.domElement)),T=new Q0(F,A.domElement),T.enableDamping=!0,T.dampingFactor=.05,T.screenSpacePanning=!0,T.minDistance=1,T.maxDistance=100,w=()=>{console.log("Camera position:",F.position.x.toFixed(2),F.position.y.toFixed(2),F.position.z.toFixed(2))},T.addEventListener("change",w);let M=null;new fx().load(r,function(n){try{document.getElementsByTagName("canvas")[0].style.height="100%"}catch{console.log("cant set canvas height")}console.log("model loaded:",n.scene),f(!1),M=n.scene,M.position.set(0,0,0),M.scale.set(1,1,1),M.traverse(N=>{var G,k,W;if(N.isMesh){if(N.name==="Cylinder003"){const O=((G=window.s3_remix_config)==null?void 0:G.racketFrameColor)||"#8348ff",tt=new At(Zx(O));N.material=new ti({color:tt,roughness:.2,metalness:O=="#FFFFFF"?.2:.6})}if(N.name==="Cylinder003_1"){const O=new At((k=window==null?void 0:window.s3_remix_config)==null?void 0:k.racketGripColor);N.material=new ti({color:O,roughness:.7,metalness:.1})}if(N.name==="Cylinder003_2"){const O=new At((W=window==null?void 0:window.s3_remix_config)==null?void 0:W.logoColor);N.material=new ti({color:O,roughness:.5,metalness:0})}if(N.name==="Cylinder003_3"){const O=new At(16777215);N.material=new ti({color:O,roughness:.9,metalness:0})}}}),b.add(M),(()=>{const G=Date.now();function k(){const W=Date.now()-G,O=Math.min(W/3500,1),tt=O*2*Math.PI;M&&(M.rotation.z=tt),O<1&&t==="Badminton Racket"&&requestAnimationFrame(k)}k()})(),(()=>{const N=t==="Pickleball Paddle"?3500:4500,G=Date.now(),k=rt=>{switch(rt){case"Badminton Racket":return{start:new P(0,0,10),end:new P(-2,1,0)};case"Pickleball Paddle":default:return{start:new P(0,15,2),end:new P(-1.35,0,2.5)}}},{start:W,end:O}=k(t);function tt(){const rt=Date.now()-G,mt=Math.min(rt/N,1),Mt=Kx(mt);F.position.x=W.x+(O.x-W.x)*Mt,F.position.y=W.y+(O.y-W.y)*Mt,F.position.z=W.z+(O.z-W.z)*Mt,mt<1?requestAnimationFrame(tt):l(!1)}tt()})()},function(){console.log("loading the model. hang on")},function(n){console.error("error loading model:",n)}),y=new ef(16777215,.7),b.add(y),D=new vh(16777215,1),D.position.set(1,1,1),b.add(D);function Y(){T.update(),A.render(b,F),requestAnimationFrame(Y)}Y()})()}catch(F){console.error({error:F})}return()=>{console.log("clear"),T&&(T.removeEventListener("change",w),T.dispose()),A==null||A.dispose(),y==null||y.dispose(),D==null||D.dispose(),b==null||b.clear()}},[p]),lo(()=>{var T,A,y,D;s.current&&a.current!==null&&(s.current.selectionStart=a.current,s.current.selectionEnd=a.current),g?(document.getElementById("remix-description").innerHTML=`Uniquely Yours — You are making this ${window.s3_product_name} truly yours by personalising with <span id="the-sticker" class='emojiFont'>${g}</span>`,(A=(T=document.getElementsByClassName("product-form__submit button")[0])==null?void 0:T.classList)==null||A.add("glowing")):(document.getElementById("remix-description").innerHTML=qx,(D=(y=document.getElementsByClassName("product-form__submit button")[0])==null?void 0:y.classList)==null||D.remove("glowing"))},[g]),Bt(kh,{open:p,onOpenChange:m,children:Bt(Ih,{children:[Bt(Uh,{}),Bt(Nh,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1e3,overflow:"auto",background:"white"},children:[Bt(Oh,{}),Bt("section",{children:Bt("div",{children:[Bt("div",{id:"model"}),c?Bt("div",{style:{position:"fixed",top:0,left:0,height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",color:"var(--gray-70)"},children:Bt("h2",{style:{fontSize:"1.5rem",letterSpacing:"0px"},children:"Part of the pleasure is the build up. Are you ready?"})}):Bt("div",{children:[Bt("div",{style:{position:"absolute",top:"2rem",width:"100%",textAlign:"center",fontSize:"2.2rem",zIndex:50},children:[Bt("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2rem 4rem"},children:[Bt("svg",{onClick:()=>{m(!1)},width:24,height:24,"aria-hidden":"true",fill:"none",strokeWidth:2,stroke:"var(--gray-90)",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Bt("path",{d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",strokeLinecap:"round",strokeLinejoin:"round"})}),Bt("div",{children:Bt("h3",{style:{letterSpacing:"-1px",margin:0},children:[Bt("span",{style:"background: linear-gradient(90deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%) padding-box text; color: transparent;",children:["✨ ",e," Remix"]})," "," ","by ",window.s3_brand]})}),Bt("svg",{onClick:()=>{m(!1)},width:24,height:24,"aria-hidden":"true",fill:"none",strokeWidth:2,stroke:"var(--gray-90)",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Bt("path",{d:"M6 18 18 6M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})]}),Bt("p",{style:{marginTop:"0.5rem",color:"var(--gray-30)",lineHeight:"140%",fontSize:"1.7rem",letterSpacing:"0px"},children:["Add your name, initials or emojis ",Bt("br",{})," and show off this uniquely yours ",e,"."]})]}),Bt("h2",{style:{color:((d=window.s3_remix_config)==null?void 0:d.stickerTextColor)||"#fff",position:"absolute",width:"100vw",height:"100vh",top:0,left:0,margin:0,display:"flex",justifyContent:"center",alignItems:"center",fontSize:"5rem",transition:"opacity 0.5s ease",opacity:o?0:.8},children:Bt("span",{style:{position:g.length>6?"relative":"static",right:g.length>6?"3rem":"0rem"},className:"emojiFont",id:"sticker-name",children:g})}),Bt("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"9rem",padding:"0 3px",width:"100%",transition:"opacity 0.5s ease",opacity:o?0:1},children:[Bt("div",{className:"emojiFont",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",color:"black"},onClick:()=>{var T;(T=document.getElementById("sticker-name-input"))==null||T.focus()},children:Ol.map(T=>Bt("div",{style:{outline:"none",appearance:"none",background:"none",border:"none",fontSize:"2.5rem",margin:"0 0.4rem",cursor:"pointer"},onClick:()=>{var w,F,S;u("");const A=new uo,y=g||"",D=A.splitGraphemes(y);if(D.filter(M=>!Nl(M)).length+1>2)return u("You cannot have more than 2 emojis in the sticker");{const M=[...D.slice(0,(w=s.current)==null?void 0:w.selectionStart),T,...D.slice((F=s.current)==null?void 0:F.selectionStart)].slice(0,i).join("");a.current=((S=s.current)==null?void 0:S.selectionStart)+2,_(M)}},children:T},T))}),Bt("div",{style:{position:"relative"},children:[Bt("input",{className:"emojiFont services-input",type:"text",name:"name",id:"sticker-name-input",placeholder:"Your-Personalisation",value:g,autoComplete:"off",ref:s,onInput:T=>{const A=T.target,y=new uo,D=A.value,b=y.splitGraphemes(D).filter(w=>Ol.includes(w)||Nl(w)).slice(0,i).join("").toUpperCase();A.value=b,_(b),a.current=A.selectionStart}}),Bt("svg",{onClick:()=>{m(!1)},style:{width:"24px",height:"24px",position:"absolute",right:"1.5rem",top:"47%"},"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Bt("path",{d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",strokeLinecap:"round",strokeLinejoin:"round"})})]}),Bt("div",{style:{opacity:g.length>0?1:0,transition:"opacity 0.2s ease-in-out",display:"flex",justifyContent:"space-between",gap:"1rem",marginTop:"2rem"},children:[Bt("button",{onClick:()=>{_(""),m(!1)},style:{color:"var(--gray-90)",backgroundColor:"white",borderColor:"white"},className:"button",children:"Remove"}),Bt("button",{onClick:()=>{m(!1)},style:{display:"flex",alignItems:"center"},className:"button",children:[Bt("span",{children:"Personalise"}),Bt("span",{children:Bt("svg",{style:{width:"2rem",fill:"currentColor",stroke:"currentColor",marginLeft:"0.5rem"},viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"1.5",children:[Bt("path",{d:"M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z",strokeWidth:"1.5",strokeLinejoin:"round"}),Bt("path",{d:"M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z",strokeWidth:"1.5",strokeLinejoin:"round"})]})})]})]})]}),Bt("p",{style:{position:"absolute",bottom:"1rem",fontSize:"1.1rem",color:"var(--gray-30)",width:"100%",textAlign:"center"},children:"No modifications after the order is placed."})]})]})})]})]})})};function Kx(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,2.5)/2}const Zx=r=>{try{return parseInt((r||"#8348ff").replace("#",""),16)}catch{return 8603903}},Nl=r=>/^[a-zA-Z0-9. ]*$/.test(r),Ol=["😊","😘","😍","😂","😎","🌈","🔥","🌊","🍀","👽","👑","✨","🪄","🤍"],$x=document.getElementById("remix-modal");Fh(Bt(jx,{}),$x);
