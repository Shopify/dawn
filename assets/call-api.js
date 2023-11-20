class CallApi extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
    this.callGraphQL();
    });
  }

  callGraphQL() {

    const token = '31851dc50956aba8405de63d812de188'
    const shopName = this.dataset.name

    fetch(`https://${shopName}/api/2023-10/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query: `
          query { products(first: 10) {
            edges {
              node {
                id
                title
                handle
                variants(first: 2) {
                  edges {
                    node {
                      title
                    }
                    cursor
                  }
                  pageInfo {
                    hasNextPage
                  }
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
            }
          }
        }`,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
    
        console.log(response, 'hehe)')
        let counter = 0;
          response.data.products.edges.forEach((prod) => {
            if (counter < 10) {
              console.log(prod.node.title, 'prod')
              prod.node.variants.edges.forEach((variant) => {
                if (counter < 10) {
                  counter = counter + 1
                  console.log(variant, 'variants', counter)
                }
              })
            }
          })
      

        console.log(array, 'arrayyyy')
        // Figure out how many
        
        // return response.text();
        // return response.json();
      })
    
    
    // const config = fetchConfig('javascript');
    // config.headers = {
    //   'X-Shopify-Storefront-Access-Token': token,
    //   'Content-Type': 'application/json',
    // };
    // config.body = formData;
    
    console.log('hey')
    
    console.log(shopName, 'heheh')
    
    
    // fetch(`https://${shopName}/api/2023-07/graphql.json`, config).then((response) => response.text())
    //   .then((responseText) => {
    //     console.log(responseText, 'hehe')
    //   }
    //   )
    }
    
}

customElements.define('call-api', CallApi);

