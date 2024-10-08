import React from "react";
/* import { ButtonVymazCisla } from "./ButtonVymazCisla";
import { ButtonZahrajSi } from "./ButtonZahrajSi"; */
//import "./style.css";





const Desktop = () => {
return (
<>
<div style={{width: '100%', height: '100%', position: 'relative', background: '#EDF1EC'}}>
<div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 615, top: 76, position: 'absolute', background: '#622363', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<button style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 27, letterSpacing: 0.10, wordWrap: 'break-word'}}>Zahraj si BINGO!</button>
</div>
<div style={{width: 151, height: 35, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 224, top: 203, position: 'absolute', background: '#337DB2', borderRadius: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<button style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 27, letterSpacing: 0.10, wordWrap: 'break-word'}}>Vymaž čísla</button>
</div>
<div style={{width: 142, height: 16, left: 381, top: 180, position: 'absolute', textAlign: 'center', color: '#337DB2', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Počet kartičiek</div>
<div style={{width: 123, height: 27, left: 395, top: 202, position: 'absolute'}}></div>
<div style={{width: 152, height: 35, padding: 10, left: 395, top: 202, position: 'absolute', borderRadius: 6, border: '1px #337DB2 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
<div style={{textAlign: 'center', color: '#337DB2', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>0</div>
</div>
</div></>
);
};


export default Desktop;