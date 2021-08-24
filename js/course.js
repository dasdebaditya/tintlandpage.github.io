function select_course_func()
{
  var select = document.getElementById("boxcourseid");
  var typevalue = select.options[select.selectedIndex].value;    
  
  if (typevalue == 'Undergraduate' )
  {
    document.getElementById("boxprogramid").innerHTML="<select name='program' id='boxprogramid' class='form-control architects-select validate[required]'><option value='' selected='selected'>Select Your Program*</option><option value='BBA1'>BBA</option>\
    <option value='BCom1'>B.Com</option>\
  </select>";
  }

  else if (typevalue == 'Postgraduate')
  {
    document.getElementById("boxprogramid").innerHTML="<select name='program' id='boxprogramid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Program*</option><option value='MBA1'>MBA</option>\
    <option value='MCA1'>MCA</option>\
    <option value='MCom1'>M.Com</option>\
    <option value='MA1'>MA</option>\
  </select>";
  }

}