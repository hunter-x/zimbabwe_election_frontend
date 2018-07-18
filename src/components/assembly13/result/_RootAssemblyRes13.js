import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import Translate from 'react-translate-component';
import './styleBox.css'
import config from '../../config'
import axios from 'axios';
import SeatsSemiCircle from './SeatsSemiCircle';
import ReactTooltip from 'react-tooltip'

export default class _RootAssemblyRes13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shapeIsLoaded: false, assembly_house_res13: []
        }
    }
    componentWillMount() {

        let qString = `${config.apiUrl}/api/shape/zim_assemblyhouse_res_13`;
        console.log(qString);
        axios({
            method: 'get',
            url: qString,
            headers: {
                'name': 'Isie',
                'password': 'Isie@ndDi',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },

        })
            .then(response => {
                console.log(response);
                this.setState({ assembly_house_res13: JSON.parse(response.data.data), shapeIsLoaded: true });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        const TITLE = <Translate type='text' content='pres13Invalid.title' />//You can select rejected or unacounted from the list
        let colorBox;
        return (
            <div>
                <Navbar home='' about='' data='' contact='' />
                <div id="content">
                    <div className="menu-trigger"></div>
                    <div className="site-content">
                        <h1 className="site-content__headline"> House of Assembly results  </h1>
                    </div>
                    <div className='col-md-12'>
                        <SeatsSemiCircle />
                    </div>
                    <div className="row">

                        <div className='col-md-12'>

                            <div className="col-md-2 card info-card-font" >
                                <h6 className='center '>Controlers</h6>

                            </div>

                            <div className="col-md-10 col-sm-12">
                                <div className="content-inner">
                                    {
                                        this.state.assembly_house_res13.map(function (constituencyElm) {
                                            constituencyElm.party_winner == 'mdc_t' ? colorBox = '#EB4948' : constituencyElm.party_winner == 'indep' ? colorBox = '#F7B62C' : colorBox = '#7ECF68';
                                            return (
                                                <a key={constituencyElm.winner_name}

                                                    className="box col-md-1 tooltipRectangle" style={{ background: colorBox }} >
                                                    <div className="inner"></div>
                                                    <div className="tooltiptext">
                                                        <h5 style={{ textAlign: 'center' }}>{constituencyElm.constituency} / {constituencyElm.province}</h5>
                                                        <h5 style={{ color: '#FE9187' }}>Deputy Name: <span style={{ color: '#fff' }} > {constituencyElm.winner_name} </span> </h5>
                                                        <h5 style={{ color: '#FE9187' }}>Votes Percentage: <span style={{ color: '#fff' }} >  {(parseInt((constituencyElm.winner_votes).replace(/,/g, '')) * 100 / parseInt((constituencyElm.total_votes).replace(/,/g, ''))).toFixed(2) + ' %'} </span> </h5>
                                                        <h5 style={{ color: '#FE9187' }}>Votes Number: <span style={{ color: '#fff' }} >  {commaNum((constituencyElm.winner_votes).replace(/,/g, '')) + ' votes'} </span> </h5>

                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className='col-md-12' >
                        <div className='col-md-offset-3'>
                            <div className="box " style={{ background: '#F7B62C' }} ></div> <h3 className='col-md-3' style={{ marginTop: '1vh' }}>Independent</h3>
                        </div>
                        <div className='col-md-offset-2'>
                            <div className="box " style={{ background: '#EB4948' }} ></div> <h3 className='col-md-2' style={{ marginTop: '1vh' }}>MDC-T</h3>
                        </div>
                        <div className='col-md-offset-2'>
                            <div className="box " style={{ background: '#7ECF68' }} ></div> <h3 className='col-md-3' style={{ marginTop: '1vh' }}>ZANU-PF</h3>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

const commaNum = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}