// //Demo 1
// //Constants - May be declared in some different file
// const AddMode:string="Add";
// const EditMode:string="Edit";
var currentMode = GetCurrenMode();
if (currentMode == "Add" /* AddMode */) {
    //Do Save operation
}
else if (currentMode == "Edit" /* EditMode */) {
    //Do Update Operatopm
}
function GetCurrenMode() {
    return Mode.VegBurger;
}
