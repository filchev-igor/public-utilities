import Navbar from '../../components/Navbar';
import "./ContactStyle.scss";

const Contacts = async () => {

    const isDarkMode = false;
    return isDarkMode ?

   (`
    ${await Navbar()}
    
    <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.1284173108193!2d25.285978341455912!3d54.712506619843914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9424f9078fdd%3A0x7b569e1a6c96f924!2sVilniaus%20verslo%20kolegija!5e0!3m2!1slt!2slt!4v1643394553972!5m2!1slt!2slt" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
        <div class="line">
        </div>
<div class="line5">
</div>
<div class="background">
                <h1 style="top: 570px; position:absolute; left: 300px; "> Kaip galime padeti?</h1>
            <div class="info">
                <h1 style="position: absolute; top: 280px; left: 1300px;"> Kontaktai </h1>
<br>
            <div class="info2">

                <h4 style="left: 130px; position: absolute;">   Kalvariju g. 129-401</h4> <br>
<br>
               <h4 style="left: 140px; position: absolute;"> (+370) 618 482 55</h4><br>
<br>
             <h4 style="left: 200px; position: absolute;"> Vilnius</h4><br>
              

    </div>
                <input type="text" value="Vardas" onfocus="this.value=''"  style="position: relative; top: 50px; left: 380px;"><br>
                <input type="text" value="Adresas" onfocus="this.value=''"  style="position: relative; top: 60px; left: 380px;"><br>
                <input type="text" value="El.Pastas" onfocus="this.value=''"  style="position: relative; top: 70px; left: 380px;"><br>
                <input type="text" value="Zinute" onfocus="this.value=''"  style="position: relative; top: 80px; left: 290px; width: 350px; height: 150px; text-align: center;">
                    <button type="submit" class="submit" >Siusti
                    </button>
            </div>
        <div class="line2">
        </div>
<div class="line3">

</div>
<div class="line4">
</div>
</div>

  `)
     :
        (`
    ${await Navbar()}
    
    <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.1284173108193!2d25.285978341455912!3d54.712506619843914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9424f9078fdd%3A0x7b569e1a6c96f924!2sVilniaus%20verslo%20kolegija!5e0!3m2!1slt!2slt!4v1643394553972!5m2!1slt!2slt" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
        <div class="line">
        </div>
<div class="line5">
</div>
                <h1 style="top: 570px; position:absolute; left: 300px; "> Kaip galime padeti?</h1>
            <div class="info">
                <h1 style="position: absolute; top: 280px; left: 1300px;"> Kontaktai </h1>
<br>
            <div class="info2">

                <h4 style="left: 130px; position: absolute;">   Kalvariju g. 129-401</h4> <br>
<br>
               <h4 style="left: 140px; position: absolute;"> (+370) 618 482 55</h4><br>
<br>
             <h4 style="left: 200px; position: absolute;"> Vilnius</h4><br>
              

    </div>
                <input type="text" value="Vardas" onfocus="this.value=''"  style="position: relative; top: 50px; left: 380px;"><br>
                <input type="text" value="Adresas" onfocus="this.value=''"  style="position: relative; top: 60px; left: 380px;"><br>
                <input type="text" value="El.Pastas" onfocus="this.value=''"  style="position: relative; top: 70px; left: 380px;"><br>
                <input type="text" value="Zinute" onfocus="this.value=''"  style="position: relative; top: 80px; left: 290px; width: 350px; height: 150px; text-align: center;">
                    <button type="submit" class="submit" >Siusti
                    </button>
            </div>
        <div class="line2">
        </div>
<div class="line3">

</div>
<div class="line4">
</div>


  `);
};

export default Contacts;
