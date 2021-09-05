import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App" style={{ 
        backgroundImage: `url("bg.jpg")` , 
        position: 'center',
  repeat: 'no-repeat',
  size: 'cover',
     }}>

          <div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
           <img src="logo.jpg" alt="logo" className="logo" style={{height:'100px'}}></img> <h1>Diabetes Predictor App</h1>
            <div className="card">
                <form className="form-card">
               <img src="user.png" alt="user" className="user"></img>
               <div className="form-group col-12 flex-column "> </div>
               <div className="row">
                        <div className="form-group col-6 " id="balance"> <label className="form-control-label px-4">Glucose (mG/dL)</label>   </div><div className="form-group col-sm-6"> <input style={{width:'200px', height:'30px'}} type="number" min="0" name="Glucose"></input> </div>
                    </div>
                
                    <div className="row">
                        <div className="form-group col-6 "> <label className="form-control-label px-3">Blood Pressure (mmHg)</label>  </div><div className="form-group col-sm-6"> <input style={{width:'200px', height:'30px'}} type="number" min="0" name="BloodPressure"></input> </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6"> <label className="form-control-label px-3">Skin Thickness (mm)</label>  </div> <div className="form-group col-sm-6"> <input style={{width:'200px', height:'30px'}} type="number" min="0" name="SkinThickness"></input> </div>
                    </div>  
                    <div className="row">
                        <div className="form-group col-6"> <label className="form-control-label px-3">Insulin (mIU/L)</label>  </div> <div className="form-group col-sm-6"> <input style={{width:'200px', height:'30px'}} type="number" min="0" name="Insulin"></input> </div>
                    </div> 
                    <div className="row">
                        <div className="form-group col-6"> <label className="form-control-label px-3">BMI (kg/m²)</label>  </div> <div className="form-group col-sm-6"> <input style={{width:'200px', height:'30px'}} type="number" min="0" name="BMI"></input> </div>
                    </div>  
                    <div className="row">
                        <div className="form-group col-6"> <label className="form-control-label px-3">Age (years)</label>  </div> <div className="form-group col-sm-6"> <input style={{width:'200px', height:'30px'}} type="number" name="Age"></input> </div>
                    </div>  
                    <div className="row">
                        <div className="form-group col-6">  <button type="button" className="btn-block btn-primary" >Predict Result</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default App;
