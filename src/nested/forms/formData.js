export class FormData {
  home = `<form id="searchFormId">
       <div id="title-div" class="row">
       My Wellness App offers daily check-ins to help you track your mood and water intake, as well as vitals monitoring and medication reminders
       </div>
       <div id="submitDiv" class="row">
       <button  class="btn btn-primary" type="button" id="gotoprofile">Get Started</button>
       </div>
       </form>`;

  profile = `<h1>Your Profile Detail</h1>
        <form id="searchFormId">
          <div class="row">
            <label>Please enter your name</label><br />
            <input type="text" name="name" value="" id="name" />
          </div>
          <div class="row">
            <label>Upload a profile image</label><br />
            <input type="file" onchange="ShowPreview(event);" accept="image/x-png,image/gif,image/jpeg" name="profilepic" id="profilepic" />
            <div id="idPreview"><img id="file-ip-1-preview"></div>
          </div>
          <div class="row">
            <label>What is your date of birth</label><br />
            <!--<input type="text" name="dob" value="" id="dob" />-->
            <input type="date" id="dob" name="dob">
          </div>
          <div class="row">
            <label>What is your e-email</label><br />
            <input type="text" name="email" value="" id="email" />
          </div>
          <div id="submitDiv" class="row">
            <button  class="btn btn-primary" type="button" id="submitFirstCheck">Start Your First Check-in!</button>
          </div>
        </form>`;

  activity = `<h1>First Check-in</h1>
        <form id="searchFormId">
          <div class="row">
            <div class="appp">
              <label>How are you feeling today?</label><br />
                <div class="container_feeling">
          
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0" />
                  <label class="form-check-label" for="inlineRadio1">&#128545;</label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                  <label class="form-check-label" for="inlineRadio1">&#128542;</label>
                  </div>
          
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="2" />
                  <label class="form-check-label" for="inlineRadio1">&#128528;</label>
                  </div>
                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="3" />
                  <label class="form-check-label" for="inlineRadio1">&#128578;</label>
                  </div>

                  <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="4" />
                  <label class="form-check-label" for="inlineRadio2">&#128512;</label>
                  </div> 
              </div>
            </div>
          </div>
          <div class="row">
            <label>How much water have you drank today?</label><br />
            <input type="number" min="5" max="100" name="waterintake" value="" id="waterintake" />&nbsp;&nbsp;
            <select name="units" id="units">
              <option value="1">Oz.</option>
              <option value="2">Cup</option>
              <option value="3">Litter</option>
              <option value="4">Gallon</option>
            </select>
          </div>
          <div class="row">
            <label>Whay have you eaten today?</label><br />
            <input type="text" name="foodintake" value="" id="foodintake" />
          </div>
          <div class="row">
            <label>Journal entry</label><br />
            <textarea id="entry"></textarea>
          </div>
      
          <div class="row">
            <label>Do you take any medications?</label><br />
            <input type="checkbox" name="medicineStatus" value="" id="medicineStatus" />
          </div>
          <div class="row">
            <div><label>Would you like daily reminders?</label><br />
              <input type="checkbox" name="reminders" value="" id="reminders" />
            </div>
            <div><label>What time would you like daily reminders?</label><br />
              <input type="time" id="appt" name="appt">
            </div>
          </div>
          <div id="submitDiv" class="row">
            <button  class="btn btn-primary" type="button" id="submitButton">Submit</button>
          </div>
        </form>`;
}

export const formDataObj = new FormData();
