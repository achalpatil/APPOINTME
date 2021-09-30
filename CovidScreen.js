import React, {useState, useEffect } from 'react';



export default function CovidScreen() {

const [data, setData] = useState([]);

   const getCovidData = async () =>{
     const res = await fetch('https://api.covid19india.org/data.json');
     const actualData = await res.json();
     console.log(actualData.statewise);
     setData(actualData.statewise);
     
   }
   useEffect(()=>{
     getCovidData();
   }, []);
  return (
      <div> 
        <h1 className="corona">COVID UPDATES</h1>
<div>
  <div class="carousel">
    <ul class="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://ballstonareacc.org/wp-content/uploads/2020/06/Prevention.jpg"alt="covid"/>
        </div>
        <div class="carousel-controls">
          <label for="img-3" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://image.freepik.com/free-vector/social-distancing-illustration_23-2148501965.jpg" alt="covid"/>
        </div>
        <div class="carousel-controls">
          <label for="img-1" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-3" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://answers.childrenshospital.org/wp-content/uploads/2021/02/CPR_COVID_VaccinesFragileChild_Nancy_Blog.jpg" alt="covid"/>
        </div>
        <div class="carousel-controls">
          <label for="img-2" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-1" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div>

<div className="container-fluid mt-5">
  <div className="main-heading">
    <h1 className="covidName">INDIA COVID-19 DASHBOARDS</h1>
  </div>
   
<div className="table-responsive">
  <table id="t01" className="table table-hover">
    <thead className="thead-dark">
      <tr  >
        <th>State</th>
        <th>Confirmed</th>
        <th>Recoverd</th>
        <th>Death</th>
        <th>Active</th>
        <th>Updated Time</th>
      </tr>
    </thead>
    <tbody>
{
  data.map((curElem, ind)=>{
    return(
<tr key="ind">
        <td>{curElem.state}</td>
        <td>{curElem.confirmed}</td>
        <td>{curElem.recovered}</td>
        <td>{curElem.deaths}</td>
        <td>{curElem.active}</td>
        <td>{curElem.lastupdatedtime}</td>
      </tr>
    )
  })
}

    
    </tbody>
  </table>
</div>

</div>




    <div className="covid">
      <h2>SYMPTOMS OF COVID-19</h2>
      </div>
      
      
      
      
      <div className="container">
      <div className=" row newRow">
      
      <div className="column newc ">
      <img src="images/fever.png" alt="fever" className="img-fluid bg-info" width="120" height="120"></img>
      <p>Fever above 100</p>
      </div>
      
      
      <div className="column newc">
      <img src="images/cough.png"alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Dry Cough and Sneezing</p>
      </div>
      
      
      <div className="column newc">
      <img src="images/tiredness.png"alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Tiredness or Weakness</p>
      </div>
      
      </div>
      
      
      
      
      
      <div className="row newRow ">
      
      <div className="column newc">
      <img src="images/headache.png" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Sevier Headache</p>
      </div>
      
      
      <div className="column newc">
      <img src="images/difficulty.png" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Difficulty  in Breathing  </p>
      </div>
      
      
      <div className="column newc">
      <img src="images/chestpain.png" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Sevier Pain in Chest </p>
      </div>
      
      </div>
      
      
      </div>
      
      
      
      
      
      <div className="covid">
      <h2>PRECAUTIONS FOR COVID-19</h2>
      </div>
      
      
      
      
          
          
      <div className="container">
      <div className="row newRow ">
      
      <div className="column newc">
      <img src="images/handwash.jpg" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub</p>
      </div>
      
      
      <div className="column newc">
      <img src="images/mask.jpg" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Wear a mask when physical distancing is not possible</p>
      </div>
      
      
      <div className="column newc">
      <img src="images/distance.png" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Maintain a safe distance from anyone who is coughing or sneezing</p>
      </div>
      
      
      
      
      </div>
      
      
      
      
      
      <div className="row newRow ">
      
      <div className="column newc">
      <img src="images/usetissue.jpg" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze</p>
      </div>
      
      
      <div className="column newc">
      <img src="images/eyetouch.jpg" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>Don’t touch your eyes, nose or mouth</p>
      </div>
      
      
      <div className="column newc">
      <img src="images/medical.png" alt="fever" className="img-fluid bg-info" width="120" height="120"/>
      <p>If you have a fever, cough and difficulty breathing, seek medical attention</p>
      </div>
      
      </div>
      
      
      </div>

       </div> 
    );
  }


