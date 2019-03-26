import React, { Component } from 'react'
import Sample from './Madre.jpg';
import './midcontent.css'


class MidContent extends Component {
    render() {
        return (
            <div className="container clor">
                <div className="row row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 firstdiv">

                        <p className="para">


                            <b> Live Music - Torrance Location Only</b><br /><br />

                            <b>Thursday</b>: Voz Bohemia 7-10PM<br /><br />

                            <b>Friday</b>: Grupo Bella 7-10PM<br /><br />

                            <b>Sunday</b>: La Victoria Music 12-3PM || Rosalie y Los Rodriguez 5:30-<br />8:30PM <br /><br />

                            *Reservations through Yelp highly recommended, for Torrance location<br />only.<br /><br />

                            Happy Hour - Los Angeles &amph; Torrance Locations<br /><br />

                            Reg HH Mon-Fri 3-6PM *<br /><br />

                            Late Night HHH Mon-Fri 10-11PM *<br /><br />

                            *For Torrance location, only valid at bar and patio. For LA location, only<br />valid inside dinning room and bar.<br />
                            ---------------------------------------------------------------------------<br /><br />

                            Madre features an exciting selection of fusion drinks. If you are in the<br />mood for great food and an amazing mezcal selection,
Madre is the place<br />to eat. Come and try our provocative dishes proudly prepared by our<br />staff who create each meal with all the love and
the spirit found in the<br />heart of Oaxaca, Mexico! Bare in mind, you are about to experience one<br />of the best cuisines in Mexico.<br /><br />

                            We specialize in authentic Oaxacan cuisine, our family recipes have<br />been passed down several generations. When you visit us, try one of<br />
                            our signature dishes featuring mole, a fantastic and flavorful sauce<br />which has been served since prehispanic times.
Allow us to delight your<br />taste buds.<br /><br />
                        </p>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 secdiv">
                        <img src={Sample} className="img-fluid sample" alt="Image" />
                    </div>
                </div>





            </div>
        )
    }
}

export default MidContent