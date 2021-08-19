import React from 'react';

import './App.css'

const data = [


  {
   type:'Free',
  Amount : 0,
  Storage:'5GB Storage',
  Users: 'Single User',
  Projects: 'Unlimited Public Projects',
  Access:'Community Access'
  },
  
  
  {
   type:'PLUS',
  Amount : 9,
  Storage:'50GB Storage',
  Users: '5 Users',
  Projects: 'Unlimited Public Projects',
  Access:'Community Access'
  }
  ,
  {
   type:'PRO',
  Amount : 49,
  Storage:'150GB Storage',
  Users: 'Unlimited Users',
  Projects: 'Unlimited Public Projects',
  Access:'Community Access'
  }
  
  
  
  ]


function App() {
  return (
    <> 
<div class="pricing">
<div class="container">
    <div class="row">
    {data.map(datas => {
      return(
        <div class="col-md-4 col-sm-6">
            <div class="pricingTable">
                <div class="pricing_heading">
                    <h3 class="title">{datas.type}</h3>
                    <span class="value">
                        ${datas.Amount}
                        <span class="month">per month</span>
                    </span>
                </div>
                <div class="content">
                    <ul>
                        <li>{datas.Users}</li>
                        <li>{datas.Storage}</li>
                        <li>{datas.Projects}</li>
                        <li>{datas.Access}</li>
                       
                    </ul>
                    <div class="link">
                        <a href="#">sign up</a>
                    </div>
                </div>
            </div>
        </div>
        );
         })}
        
            
        </div>
    </div>
</div>


    </>
  );
}

export default App;
