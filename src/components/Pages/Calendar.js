import React from 'react'

function Calendar() {
    return (
        <div className = "bg-light" style={{textAlign: "center", marginTop: "6.5%"}}>
			<br />
			<br />
			<div className = "iframeWrapper">
				<iframe 
                src="https://calendar.google.com/calendar/embed?height=650&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=c2hpdmFuc2hpbmRpYUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%230B8043&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0" 
                style={{border: "solid 1px #777"}} 
                width="1100" 
                height="650" 
                frameborder="0" 
                scrolling="no"
                title="Meeting Calender"
            	/>
			</div>
            
			<br />
        </div>
    )
}

export default Calendar;
