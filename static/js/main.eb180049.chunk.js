(this.webpackJsonpweeklyplanner2=this.webpackJsonpweeklyplanner2||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(18),s=a.n(o),c=(a(26),a(20)),i=a(1),l=a(2),p=a(4),f=a(3),u=a(12),d=a(5),m=(a(27),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"Login",n.a.createElement("div",null,n.a.createElement(u.b,{to:"/planner"},n.a.createElement("button",null,"log in"))))}}]),a}(r.Component)),h=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).drag=function(t){console.log(e.props.workerDB3[e.props.i1]),t.dataTransfer.setData("src",e.props.workerDB3[e.props.i1].id)},e.draging=function(e){},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"ticket".concat(this.props.i1),className:"ticketDiv",style:{borderColor:"".concat(this.props.workerDB3[this.props.i1].color)},draggable:"true",onDragStart:this.drag,onDrag:this.draging},this.props.workerDB3[this.props.i1].name)}}]),a}(r.Component),k=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.workerDB2.map((function(t,a){return n.a.createElement(h,{key:a,workerDB3:e.props.workerDB2,i1:a})})))}}]),a}(r.Component),v=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).markerStart=function(){var t=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft+120;if(e.props.axisX1<t)return 0;if(e.props.axisX1-t+e.markerLength()>720){var a=document.getElementsByClassName("dropAreaDiv")[0].offsetWidth-e.markerLength()-2;return a}var r=e.props.axisX1-t;return a=5*Math.floor((r+1)/5)},e.markerLength=function(){return 240},e.markerColor=function(){return isNaN(e.markerStart())?"#ffffff":"#ffaaaa"},e.markerDataColor=function(){return isNaN(e.markerStart())?"#ffffff":"#0000ff"},e.addShift=function(){console.log("addShift")},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"markerDiv",style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",height:"18px",width:"".concat(this.markerLength(),"px"),border:"0px solid blue",left:"".concat(this.markerStart(),"px"),zIndex:"-1",backgroundColor:"".concat(this.markerColor())}},n.a.createElement("div",{style:{color:"".concat(this.markerDataColor())}}," ",this.markerStart()+1),n.a.createElement("div",{style:{color:"".concat(this.markerDataColor())}}," ",this.markerStart()+this.markerLength()," "))}}]),a}(r.Component),y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"shift")}}]),a}(r.Component),D=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).allowDrop=function(e){e.preventDefault(),r.state.axisX!==e.pageX&&r.setState({axisX:e.pageX});var t=r.props.dayInd2,a=r.props.postInd1;r.props.placeMarker2(t,a)},r.drop=function(e){console.log("drop"),e.preventDefault(),console.log(e.target);var t=e.dataTransfer.getData("src");console.log("src "+t),console.log("day "+r.props.dayInd2),console.log("post "+r.props.postInd1),console.log("x "+e.pageX);var a=t,n=r.props.dayInd2,o=r.props.postInd1,s=e.pageX;r.deleteMarker1(),r.addShiftToDB1(a,n,o,s)},r.placeMarker1=function(){if(r.props.dayInd2===r.props.markerPlaceDay3&&r.props.postInd1===r.props.markerPlacePost3)return n.a.createElement(v,{axisX1:r.state.axisX})},r.deleteMarker1=function(){var e=document.getElementById("markerDiv");null!==e&&e.remove(),console.log("leave"),r.props.deleteMarker2()},r.addShiftToDB1=function(e,t,a,n){console.log("adding shift"),r.props.addShiftToDB2(e,t,a,n)},r.getAxisX=function(){console.log("pressed")},r.state={axisX:void 0},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"postBodyDiv"},n.a.createElement("div",null,this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].name),n.a.createElement("div",{className:"dropAreaDiv",id:"dropDay".concat(this.props.dayInd2,"Post").concat(this.props.postInd1),onDragOver:this.allowDrop,onDrop:this.drop,onDragLeave:this.deleteMarker1},this.placeMarker1(),this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts.map((function(e,t){return n.a.createElement(y,null)})))))}}]),a}(r.Component),g=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).placeMarker3=function(t,a){e.props.placeMarker4(t,a)},e.deleteMarker3=function(){e.props.deleteMarker4()},e.addShiftToDB3=function(t,a,r,n){e.props.addShiftToDB4(t,a,r,n)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"dayBodyDiv"},n.a.createElement("div",{className:"dayNameDiv"},this.props.shiftSet2[this.props.dayInd1].name),n.a.createElement("div",null,this.props.shiftSet2[this.props.dayInd1].posts.map((function(t,a){return n.a.createElement(D,{placeMarker2:e.placeMarker3,deleteMarker2:e.deleteMarker3,addShiftToDB2:e.addShiftToDB3,key:a,shiftSet3:e.props.shiftSet2,postInd1:a,dayInd2:e.props.dayInd1,markerPlaceDay3:e.props.markerPlaceDay2,markerPlacePost3:e.props.markerPlacePost2})})))))}}]),a}(r.Component),b=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).placeMarker5=function(t,a){e.props.placeMarker6(t,a)},e.deleteMarker5=function(){e.props.deleteMarker6()},e.addShiftToDB5=function(t,a,r,n){e.props.addShiftToDB6(t,a,r,n)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{id:"plnWrkBox"},n.a.createElement("div",null,n.a.createElement(k,{workerDB2:this.props.workerDB1})),n.a.createElement("div",{id:"plannerDiv"},this.props.shiftSet1.map((function(t,a){return n.a.createElement(g,{placeMarker4:e.placeMarker5,deleteMarker4:e.deleteMarker5,addShiftToDB4:e.addShiftToDB5,key:a,shiftSet2:e.props.shiftSet1,dayInd1:a,markerPlaceDay2:e.props.markerPlaceDay1,markerPlacePost2:e.props.markerPlacePost1})})))))}}]),a}(r.Component),E=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"Presonal")}}]),a}(r.Component),S=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"History")}}]),a}(r.Component),j=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"SetPlan")}}]),a}(r.Component),O=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).placeMarker7=function(e,t){r.state.markerPlaceDay===e&&r.state.markerPlacePost===t||(r.setState({markerPlaceDay:e}),r.setState({markerPlacePost:t}))},r.deleteMarker7=function(){r.setState({markerPlaceDay:void 0}),r.setState({markerPlacePost:void 0})},r.addShiftToDB7=function(e,t,a,n){console.log("addShift"),console.log(e),console.log(t),console.log(a),console.log(n);console.log("clacShift");var o=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft+120;if(console.log(o),n<o)var s=0;else if(n-o+240>720)s=document.getElementsByClassName("dropAreaDiv")[0].offsetWidth-240-2;else{var i=n-o;s=5*Math.floor((i+1)/5)}console.log("start "+s),console.log(r.state.shiftSet[t].posts[a].shifts);var l=Object(c.a)(r.state.shiftSet);l[t].posts[a].shifts.push({workerInd:e,shiftStart:s,shiftLength:240}),r.setState({shiftSet:l})},r.state={shiftSet:[{name:"Su",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Mo",posts:[{name:"post6",shifts:[]},{name:"post7",shifts:[]},{name:"post8",shifts:[]}]},{name:"Tu",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"We",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Th",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Fr",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Sa",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]}],workerDB:[{id:0,name:"John Doe1",color:"#ff0000"},{id:1,name:"John Doe2",color:"#00aa00"},{id:2,name:"John Doe3",color:"#0000ff"}],markerPlaceDay:void 0,markerPlacePost:void 0},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,"weekly planner",n.a.createElement(u.a,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:function(){return n.a.createElement(m,null)}}),n.a.createElement(d.a,{exact:!0,path:"/planner",component:function(){return n.a.createElement(b,{placeMarker6:e.placeMarker7,deleteMarker6:e.deleteMarker7,addShiftToDB6:e.addShiftToDB7,workerDB1:e.state.workerDB,shiftSet1:e.state.shiftSet,markerPlaceDay1:e.state.markerPlaceDay,markerPlacePost1:e.state.markerPlacePost})}}),n.a.createElement(d.a,{exact:!0,path:"/personal",component:function(){return n.a.createElement(E,null)}}),n.a.createElement(d.a,{exact:!0,path:"/history",component:function(){return n.a.createElement(S,null)}}),n.a.createElement(d.a,{exact:!0,path:"/setplanner",component:function(){return n.a.createElement(j,null)}}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.eb180049.chunk.js.map