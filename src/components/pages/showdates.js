import React, { Component } from 'react';

class ShowDates extends Component {
    render(){
        return (
            <div className="container-fluid">
            <div className="ignore-css">
                <center>
                <div className="calendar">
                    <div className="route" id="index"></div>
                        <div className="route" id="oct-week-3"></div>
                        <div className="route" id="oct-week-4"></div>
                        <div className="route" id="nov-week-1"></div>
                        <div className="route" id="schedule"></div>
                        <main className="cal-device">
                        <header className="cal-header">
                            <div className="cal-subheader"></div>
                            <div className="cal-bar">
                            <div className="cal-button -left">
                                <i className="fa fa-bars -calendar"></i>
                                <a href="#index" className="fa fa-chevron-left -schedule"></a>
                            </div>
                            <div className="cal-title">
                                <div className="cal-heading -calendar">Calendar</div>
                                <div className="cal-heading -schedule">Wednesday, November 10</div>
                            </div>
                            <div className="cal-button -right">
                                <i className="fa fa-search"></i>
                            </div>
                            </div>
                        </header>
                        <section className="cal-app">
                            <header className="cal-week">
                            <div className="cal-weekday">SUN</div>
                            <div className="cal-weekday">MON</div>
                            <div className="cal-weekday">TUE</div>
                            <div className="cal-weekday">WED</div>
                            <div className="cal-weekday">THU</div>
                            <div className="cal-weekday">FRI</div>
                            <div className="cal-weekday">SAT</div>
                            </header>
                            <div className="cal-scene -calendar">
                            <div className="cal-month -october">
                                <header className="cal-header">
                                <a className="cal-link" href="#oct-week-1"><span>October</span></a>
                                <a className="cal-arrow" href="#nov-week-1"><i className="fa fa-chevron-up"></i></a>
                                <a className="cal-arrow" href="#oct-week-4"><i className="fa fa-chevron-up"></i></a>
                                </header>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a href="#schedule"  className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                            </div>
                            <div className="cal-month -november">
                                <header className="cal-header">
                                <a className="cal-link" href="#nov-week-1"><span>November</span></a>
                                <a className="cal-arrow"><i className="fa fa-chevron-up"></i></a>
                                </header>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a href="#schedule" className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a href="#schedule" className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a href="#schedule" className="cal-day"></a>
                                <a href="#schedule" className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                            </div>
                            <div className="cal-month -december">
                                <header className="cal-header">
                                <a className="cal-link"><span>December</span></a>
                                <a className="cal-arrow" href="#nov-week-1"><i className="fa fa-chevron-down"></i></a>
                                <a className="cal-arrow" href="#oct-week-3"><i className="fa fa-chevron-down"></i></a>
                                </header>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a href="#schedule" className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a href="#schedule" className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                            </div>
                            <div className="cal-month -january">
                                <header className="cal-header">
                                <div className="cal-link"><span>January</span></div>
                                <a className="cal-arrow" href="#oct-week-4"><i className="fa fa-chevron-down"></i></a>
                                </header>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                                <a className="cal-day"></a>
                            </div>
                            </div>
                        </section>
                        </main>
                </div>
                </center>
            </div>
        </div>
        );
    }
}

export default ShowDates;
