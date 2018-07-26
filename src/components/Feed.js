// src/components/Feed.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadLeads
} from './../redux/actions/actions'
import AsideFeed from './AsideFeed'
const mapStateToProps = state => {
    return {
        leads: state.leads.leads
    }
}
class Feed extends Component {
    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.loadLeads()
    }
    
    render() {
    const leads = this.props.leads.reverse().map((lead)=>
                <div className="post-panel">
                    <div className="post-metadata">
                        <img alt="" className="avatar-image" src={lead.author.provider_pic} height="40" width="40"/>
                        <div className="post-info">
                            <div data-react-className="PopoverLink">
                            <span className="popover-link" data-reactroot=""><a href={`/profile/${lead.author._id}`}>{lead.author.name}</a></span></div>
                            <small>Posted • A must read</small>
                        </div>
                    </div>
                    {lead.feature_img.length > 0 ? <div class="post-picture-wrapper">
                        <img src={lead.feature_img} alt="Thumb" />
                    </div>:''}
                    <div className="main-body">
                        <h3 className="post-title"><a href={`/leadview/${lead._id}`} >{lead.title}</a></h3>
                        <div className="post-body">
                            <p className="" dangerouslySetInnerHTML={{__html: lead.description}}></p>
                        </div>
                        <a className="read-more" href={`/leadview/${lead._id}`}>Read more</a>
                    </div>
                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action="">
                                    <button className="like-button" data-behavior="trigger-overlay" type="submit"><i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button></form>
                                <span className="like-count">{lead.claps}</span>
                            </div>
                        </div>
                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button></form>
                            </div>
                        </div>
                        <div className="response-count pull-right">
                        </div>
                    </div>
                </div>
            )
        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                        <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">
                            {leads}
                        </div>
                    </div>
                    {this.props.leads ? <AsideFeed _leads={this.props.leads} /> : ''}
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, { loadLeads })(Feed);