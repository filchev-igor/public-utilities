import Navbar from '../../components/Navbar';
import "./AOCStyle.scss";

const AmountOfConsumed = async () => {

    const isDarkMode = false;
    return isDarkMode ?

(`
        ${await Navbar()}

<div class="background">
<table class="table table-hover border border-dark" style="background-color: #b1b1b1;">
  <thead>
    <tr>
      <th scope="col">Sausis 2022</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" style="width: 100px;"></td>
      <td><input type="number" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" style="width: 100px;"></td>
      <td><input type="number" style="width: 100px;"></td>
    </tr>


    <tfoot>
      <td colspan=3"></td>
    </tfoot>


  </tbody>
</table>

<table class="table table-hover border border-dark" style="background-color: #b1b1b1;">
  <thead>
    <tr>
      <th scope="col">Gruodis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="6" style="width: 100px;" ></td>
      <td><input type="number" value="62" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="2" style="width: 100px;"></td>
      <td><input type="number" value="111" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<table class="table table-hover border border-dark" style="background-color: #b1b1b1;">
  <thead>
    <tr>
      <th scope="col">Lapkritis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="5" style="width: 100px;"></td>
      <td><input type="number" value="109" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="3" style="width: 100px;"></td>
      <td><input type="number" value="56" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<table class="table table-hover border border-dark" style="background-color: #b1b1b1;">
  <thead>
    <tr>
      <th scope="col">Spalis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="4" style="width: 100px;"></td>
      <td><input type="number" value="104" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="3" style="width: 100px;"></td>
      <td><input type="number" value="53" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<table class="table table-hover border border-dark" style="background-color: #b1b1b1;">
  <thead>
    <tr>
      <th scope="col">Rugsejis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="4" style="width: 100px;"></td>
      <td><input type="number" value="100" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="1" style="width: 100px;"></td>
      <td><input type="number" value="50" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<div class="center">
<input class="irasyti" type="submit" value="Irasyti pakeitimus"></th>
</div>
</div>


    `)
        :
        (`
        ${await Navbar()}

        <div class="container-fluid">
          <div class="row">
          
          </div>
        </div>

<table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Sausis 2022</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" style="width: 100px;"></td>
      <td><input type="number" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" style="width: 100px;"></td>
      <td><input type="number" style="width: 100px;"></td>
    </tr>


    <tfoot>
      <td colspan=3"></td>
    </tfoot>


  </tbody>
</table>

<table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Gruodis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="6" style="width: 100px;" ></td>
      <td><input type="number" value="62" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="2" style="width: 100px;"></td>
      <td><input type="number" value="111" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Lapkritis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="5" style="width: 100px;"></td>
      <td><input type="number" value="109" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="3" style="width: 100px;"></td>
      <td><input type="number" value="56" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Spalis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="4" style="width: 100px;"></td>
      <td><input type="number" value="104" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="3" style="width: 100px;"></td>
      <td><input type="number" value="53" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<table class="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Rugsejis 2021</th>
      <th scope="col">Skirtumas</th>
      <th scope="col">Skaitliuko rodmenys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Karstas vanduo</th>
      <td><input type="number" value="4" style="width: 100px;"></td>
      <td><input type="number" value="100" style="width: 100px;"></td>
    </tr>
    <tr>
      <th scope="row">Saltas vanduo</th>
      <td><input type="number" value="1" style="width: 100px;"></td>
      <td><input type="number" value="50" style="width: 100px;"></td>
    </tr>
   </tbody>
<tfoot>
    <td colspan=3></td>
</tfoot>
</table>

<div class="center">
<input class="irasyti" type="submit" value="Irasyti pakeitimus"></th>
</div>



    `);

};

export default AmountOfConsumed;
