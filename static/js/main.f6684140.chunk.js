(this.webpackJsonpweeklyplanner2=this.webpackJsonpweeklyplanner2||[]).push([[0],{39:function(t,e,r){t.exports=r(53)},44:function(t,e,r){},45:function(t,e,r){},53:function(t,e,r){"use strict";r.r(e);var a=r(0),s=r.n(a),n=r(18),o=r.n(n),i=(r(44),r(24)),l=r(2),c=r(3),p=r(5),f=r(4),h=r(14),d=r(8),u=(r(45),function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(l.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).drag=function(e){e.dataTransfer.setData("src",t.props.workerDB3[t.props.i1].id),e.dataTransfer.setData("srcClass",e.target.className)},t.draging=function(t){},t.bringWorkerID1=function(){t.props.bringWorkerID2(t.props.workerDB3[t.props.i1].id)},t}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{id:"ticket".concat(this.props.i1),className:"ticketDiv",style:{borderColor:"".concat(this.props.workerDB3[this.props.i1].color)},draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bringWorkerID1},this.props.workerDB3[this.props.i1].name)}}]),r}(a.Component)),m=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(l.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).bringWorkerID3=function(e){t.props.bringWorkerID4(e)},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,this.props.workerDB2.map((function(e,r){return s.a.createElement(u,{bringWorkerID2:t.bringWorkerID3,key:r,workerDB3:t.props.workerDB2,i1:r})})))}}]),r}(a.Component),v=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(l.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).markerData=function(){var e=0,r=0,a=document.getElementsByClassName("dropAreaDiv")[0].offsetLeft;if(void 0!==t.props.axisX1){var s=t.props.axisX1-a,n=t.props.localShifts.map((function(t){return t.shiftStart}));n.push(720),n.push(s);for(var o=0;o<n.length-1;o++)for(var i=0;i<n.length-1-o;i++)if(n[i]>n[i+1]){var l=n[i];n[i]=n[i+1],n[i+1]=l}for(var c=0;c<n.length;c++)if(n[c]===s)var p=c;var f=n[p+1],h=t.props.localShifts.map((function(t){return t.shiftLength+t.shiftStart}));h.push(0),h.push(s);for(var d=0;d<h.length-1;d++)for(var u=0;u<h.length-1-d;u++)if(h[u]>h[u+1]){var m=h[u];h[u]=h[u+1],h[u+1]=m}for(var v=0;v<h.length;v++)if(h[v]===s)var g=v;var k=h[g-1];if(s<k+120)r=k,e=240,f-k<240&&(r=k,e=f-k);else if(s>f-120){var D=f-k;D>=240?(r=f-240,e=240):D<240&&(r=k,e=f-k)}else r=s-120,e=240,r=5*Math.floor((r+1)/5)}return{mrkStr:r,mrkLnth:e}},t.markerColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#ffaaaa"},t.markerDataColor=function(){return 0===t.markerData().mrkLnth?"#ffffff":"#000000"},t.addShift=function(){console.log("addShift")},t}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{id:"markerDiv",style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",height:"18px",width:"".concat(this.markerData().mrkLnth,"px"),border:"0px solid blue",left:"".concat(this.markerData().mrkStr,"px"),zIndex:"-1",backgroundColor:"".concat(this.markerColor())}},s.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr),s.a.createElement("div",{style:{color:"".concat(this.markerDataColor()),zIndex:-1,fontSize:"12px"}},this.markerData().mrkStr+this.markerData().mrkLnth))}}]),r}(a.Component),g=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(l.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).shiftColor=function(){var e=parseInt(t.props.shiftData.workerId);return t.props.workerDB4.filter((function(t){return t.id===e}))[0].color},t.workerName=function(){var e=parseInt(t.props.shiftData.workerId);return t.props.workerDB4.filter((function(t){return t.id===e}))[0].name},t.drag=function(e){console.log(e.target),e.dataTransfer.setData("srcDay",t.props.dayInd3),e.dataTransfer.setData("srcPost",t.props.postInd2),e.dataTransfer.setData("srcWorkerId",t.props.shiftData.workerId),e.dataTransfer.setData("srcId",e.target.id),e.dataTransfer.setData("srcClass",e.target.className)},t}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{className:"shiftDiv",id:"d".concat(this.props.dayInd3,"p").concat(this.props.postInd2,"s").concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"w").concat(this.props.shiftData.workerId),draggable:"true",onDragStart:this.drag,onDrag:this.draging,onMouseDown:this.bring,style:{position:"absolute",width:"".concat(this.props.localShifts[this.props.shiftInd1].shiftLength,"px"),left:"".concat(this.props.localShifts[this.props.shiftInd1].shiftStart,"px"),top:"-1px",display:"flex",justifyContent:"space-between",backgroundColor:"".concat(this.shiftColor()),height:"23px",borderRadius:"3px",zIndex:1}},s.a.createElement("div",{className:"shiftDataDiv",style:{zIndex:0,fontSize:"8px",pointerEvents:"none"}},this.props.localShifts[this.props.shiftInd1].shiftStart),s.a.createElement("div",{style:{pointerEvents:"none",position:"relative",zIndex:0,fontSize:"12px"}},this.workerName()),s.a.createElement("div",{className:"shiftDataDiv",style:{zIndex:0,fontSize:"8px",pointerEvents:"none"}},this.props.localShifts[this.props.shiftInd1].shiftStart+this.props.localShifts[this.props.shiftInd1].shiftLength))}}]),r}(a.Component),k=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(t){var a;return Object(l.a)(this,r),(a=e.call(this,t)).allowDrop=function(t){if(t.preventDefault(),a.state.axisX!==t.pageX&&a.setState({axisX:t.pageX}),"shiftDiv"!==t.target.className&&"shiftDataDiv"!==t.target.className){var e=a.props.dayInd2,r=a.props.postInd1;a.props.placeMarker2(e,r)}},a.drop=function(t){t.preventDefault();var e=t.dataTransfer.getData("src"),r=t.dataTransfer.getData("srcClass");if("ticketDiv"===r&&"shiftDiv"!==t.target.className){console.log("src "+e),console.log("day "+a.props.dayInd2),console.log("post "+a.props.postInd1),console.log("x "+t.pageX);var s=e,n=a.props.dayInd2,o=a.props.postInd1,i=t.pageX;a.addShiftToDB1(s,n,o,i)}else if("ticketDiv"===r&&"shiftDiv"===t.target.className)console.log("run over");else if("shiftDiv"===r&&"dropAreaDiv"===t.target.className)console.log("transfer");else if("shiftDiv"===r&&"shiftDiv"===t.target.className){var l=t.dataTransfer.getData("srcId"),c=t.dataTransfer.getData("srcDay"),p=t.dataTransfer.getData("srcPost"),f=t.dataTransfer.getData("srcWorkerId");console.log("swap"),console.log("srcId "+l),console.log("srcDay "+c),console.log("srcPost "+p),console.log("srcWorkerId "+f);var h=t.target.id;console.log("tgtId "+h);var d=a.props.dayInd2;console.log("tgt day "+d);var u=a.props.postInd1;console.log("tgt post "+u);var m=h.slice(h.indexOf("w")+1,h.length);console.log("tgtWorkerId "+m);for(var v=0;v<a.props.shiftSet3[c].posts[p].shifts.length;v++)if(a.props.shiftSet3[c].posts[p].shifts[v].shiftId===l){console.log("src found"),console.log(a.props.shiftSet3[c].posts[p].shifts[v]);var g=v}for(var k=0;k<a.props.shiftSet3[d].posts[u].shifts.length;k++)if(a.props.shiftSet3[d].posts[u].shifts[k].shiftId===h){console.log("tgt found"),console.log(a.props.shiftSet3[d].posts[u].shifts[k]);var D=k}console.log(g),console.log(D),console.log("remaking shiftId ");var y=l.slice(0,l.indexOf("w")+1)+m;console.log("newSrcId "+y);var I=h.slice(0,h.indexOf("w")+1)+f;console.log("newTgtId "+h.slice(0,h.indexOf("w")+1)+f),a.props.swapShifts1(c,p,g,f,y,d,u,D,m,I)}a.deleteMarker1()},a.placeMarker1=function(){if(a.props.dayInd2===a.props.markerPlaceDay3&&a.props.postInd1===a.props.markerPlacePost3)return s.a.createElement(v,{axisX1:a.state.axisX,localShifts:a.props.shiftSet3[a.props.dayInd2].posts[a.props.postInd1].shifts,dayInd3:a.props.dayInd2,postInd2:a.props.postInd1,markerWorkerID4:a.props.markerWorkerID3})},a.deleteMarker1=function(){var t=document.getElementById("markerDiv");null!==t&&t.remove(),a.props.deleteMarker2()},a.addShiftToDB1=function(t,e,r,s){a.props.addShiftToDB2(t,e,r,s)},a.getAxisX=function(){console.log("pressed")},a.state={axisX:void 0,shiftStartForDrop:void 0,shiftLengthForDrop:void 0,tempA:void 0},a}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"postBodyDiv"},s.a.createElement("div",null,this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].name),s.a.createElement("div",{className:"dropAreaDiv",style:{display:"flex",position:"relative"},id:"dropDay".concat(this.props.dayInd2,"Post").concat(this.props.postInd1),onDragOver:this.allowDrop,onDrop:this.drop,onDragLeave:this.deleteMarker1},this.placeMarker1(),this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts.map((function(e,r){return s.a.createElement(g,{key:r,localShifts:t.props.shiftSet3[t.props.dayInd2].posts[t.props.postInd1].shifts,workerDB4:t.props.workerDB3,markerWorkerID4:t.props.markerWorkerID3,shiftData:e,dayInd3:t.props.dayInd2,postInd2:t.props.postInd1,shiftInd1:r})})))))}}]),r}(a.Component),D=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(l.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).placeMarker3=function(e,r){t.props.placeMarker4(e,r)},t.deleteMarker3=function(){t.props.deleteMarker4()},t.addShiftToDB3=function(e,r,a,s){t.props.addShiftToDB4(e,r,a,s)},t.swapShifts2=function(e,r,a,s,n,o,i,l,c,p){t.props.swapShifts3(e,r,a,s,n,o,i,l,c,p)},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"dayBodyDiv"},s.a.createElement("div",{className:"dayNameDiv"},this.props.shiftSet2[this.props.dayInd1].name),s.a.createElement("div",null,this.props.shiftSet2[this.props.dayInd1].posts.map((function(e,r){return s.a.createElement(k,{placeMarker2:t.placeMarker3,deleteMarker2:t.deleteMarker3,addShiftToDB2:t.addShiftToDB3,swapShifts1:t.swapShifts2,key:r,shiftSet3:t.props.shiftSet2,workerDB3:t.props.workerDB2,postInd1:r,dayInd2:t.props.dayInd1,markerPlaceDay3:t.props.markerPlaceDay2,markerPlacePost3:t.props.markerPlacePost2,markerWorkerID3:t.props.markerWorkerID2})})))))}}]),r}(a.Component),y=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(l.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).placeMarker5=function(e,r){t.props.placeMarker6(e,r)},t.deleteMarker5=function(){t.props.deleteMarker6()},t.addShiftToDB5=function(e,r,a,s){t.props.addShiftToDB6(e,r,a,s)},t.bringWorkerID5=function(e){t.props.bringWorkerID6(e)},t.swapShifts4=function(e,r,a,s,n,o,i,l,c,p){t.props.swapShifts5(e,r,a,s,n,o,i,l,c,p)},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",{id:"plnWrkBox"},s.a.createElement("div",null,s.a.createElement(m,{bringWorkerID4:this.bringWorkerID5,workerDB2:this.props.workerDB1})),s.a.createElement("div",{id:"plannerDiv"},this.props.shiftSet1.map((function(e,r){return s.a.createElement(D,{placeMarker4:t.placeMarker5,deleteMarker4:t.deleteMarker5,addShiftToDB4:t.addShiftToDB5,swapShifts3:t.swapShifts4,key:r,shiftSet2:t.props.shiftSet1,workerDB2:t.props.workerDB1,dayInd1:r,markerPlaceDay2:t.props.markerPlaceDay1,markerPlacePost2:t.props.markerPlacePost1,markerWorkerID2:t.props.markerWorkerID1})})))))}}]),r}(a.Component),I=r(57),w=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{style:{display:"flex",position:"relative"}},s.a.createElement("div",null,s.a.createElement(I.a,null,s.a.createElement(I.a.Toggle,{variant:"success",id:"dropdown-basic"},"Dropdown Button"),s.a.createElement(I.a.Menu,null,this.props.workerDB.map((function(t,e){return s.a.createElement(I.a.Item,{href:"#/worker".concat(t.id),key:e},t.id)}))))),s.a.createElement("div",null,"workers data"))}}]),r}(a.Component),S=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"History")}}]),r}(a.Component),b=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"SetPlan")}}]),r}(a.Component),E=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"HomePage")}}]),r}(a.Component),O=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("input",{placeholder:"user name",disabled:!0})),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"password",disabled:!0})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){return t.props.login()}},"enter")))}}]),r}(a.Component),j=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,"SignUp")}}]),r}(a.Component),B=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{style:{display:"flex",position:"relative"}},s.a.createElement("div",null,s.a.createElement(I.a,null,s.a.createElement(I.a.Toggle,{variant:"success",id:"dropdown-basic"},"Dropdown Button"),s.a.createElement(I.a.Menu,null,this.props.workerDB.map((function(t,e){return s.a.createElement(I.a.Item,{href:"#/worker".concat(t.id),key:e},t.id)}))))),s.a.createElement("div",null,"Worker id is ",this.props.workerID))}}]),r}(a.Component),x=function(t){Object(p.a)(r,t);var e=Object(f.a)(r);function r(t){var a;return Object(l.a)(this,r),(a=e.call(this,t)).placeMarker7=function(t,e){a.state.markerPlaceDay===t&&a.state.markerPlacePost===e||(a.setState({markerPlaceDay:t}),a.setState({markerPlacePost:e}))},a.deleteMarker7=function(){a.setState({markerPlaceDay:void 0}),a.setState({markerPlacePost:void 0})},a.addShiftToDB7=function(t,e,r,s){var n=240,o=s-document.getElementsByClassName("dropAreaDiv")[0].offsetLeft,l=a.state.shiftSet[e].posts[r].shifts.map((function(t,e){return t.shiftStart}));l.push(720),l.push(o);for(var c=0;c<l.length-1;c++)for(var p=0;p<l.length-1-c;p++)if(l[p]>l[p+1]){var f=l[p];l[p]=l[p+1],l[p+1]=f}for(var h=0;h<l.length;h++)if(l[h]===o)var d=h;var u=l[d+1],m=a.state.shiftSet[e].posts[r].shifts.map((function(t,e){return t.shiftLength+t.shiftStart}));m.push(0),m.push(o);for(var v=0;v<m.length-1;v++)for(var g=0;g<m.length-1-v;g++)if(m[g]>m[g+1]){var k=m[g];m[g]=m[g+1],m[g+1]=k}for(var D=0;D<m.length;D++)if(m[D]===o)var y=D;var I=m[y-1];if(o<I+120){var w=I;u-I<240&&(w=I,n=u-I)}else if(o>u-120){var S=u-I;S>=240?w=u-240:S<240&&(w=I,n=u-I)}else w=o-120,w=5*Math.floor((w+1)/5);var b=Object(i.a)(a.state.shiftSet);b[e].posts[r].shifts.push({workerId:t,shiftStart:w,shiftLength:n,shiftId:"d".concat(e,"p").concat(r,"s").concat(w,"w").concat(t)});for(var E=0;E<b[e].posts[r].shifts.length;E++)for(var O=0;O<b[e].posts[r].shifts.length-1-E;O++){var j=b[e].posts[r].shifts[O],B=b[e].posts[r].shifts[O+1];if(console.log(b[e].posts[r].shifts[O].shiftStart),j.shiftStart>B.shiftStart){var x=b[e].posts[r].shifts[O];b[e].posts[r].shifts[O]=b[e].posts[r].shifts[O+1],b[e].posts[r].shifts[O+1]=x}}a.mergeShifts(b,e,r,t,void 0,void 0,void 0)},a.swapShifts6=function(t,e,r,s,n,o,l,c,p,f){console.log("swap");var h=Object(i.a)(a.state.shiftSet);h[t].posts[e].shifts[r].workerId=p,h[t].posts[e].shifts[r].shiftId=n,h[o].posts[l].shifts[c].workerId=s,h[o].posts[l].shifts[c].shiftId=f,a.mergeShifts(h,t,e,s,o,l,p)},a.mergeShifts=function(t,e,r,a,s,n,o){if(console.log("merging"),console.log(t),console.log(e),console.log(r),console.log(a),void 0===o)for(var i=0;i<2;i++)for(var l=0;l<t[e].posts[r].shifts.length-1;l++){console.log(t[e].posts[r].shifts);var c=t[e].posts[r].shifts[l],p=t[e].posts[r].shifts[l+1];if(console.log(c),console.log(p),c.shiftStart+c.shiftLength===p.shiftStart&&c.workerId===p.workerId){t[e].posts[r].shifts.push({workerId:c.workerId,shiftStart:c.shiftStart,shiftLength:c.shiftLength+p.shiftLength,shiftId:"d".concat(e,"p").concat(r,"s").concat(c.shiftStart,"w").concat(a)});var f=t[e].posts[r].shifts.length,h=t[e].posts[r].shifts[f-1];t[e].posts[r].shifts[l]=h,t[e].posts[r].shifts.splice(l+1,1),t[e].posts[r].shifts.pop()}}else if(void 0!==o){console.log("merging after swaping");for(var d=0;d<2;d++){for(var u=0;u<t[s].posts[n].shifts.length-1;u++){console.log(t[s].posts[n].shifts);var m=t[s].posts[n].shifts[u],v=t[s].posts[n].shifts[u+1];if(console.log(m),console.log(v),m.shiftStart+m.shiftLength===v.shiftStart&&m.workerId===v.workerId){t[s].posts[n].shifts.push({workerId:m.workerId,shiftStart:m.shiftStart,shiftLength:m.shiftLength+v.shiftLength,shiftId:"d".concat(s,"p").concat(n,"s").concat(m.shiftStart,"w").concat(a)});var g=t[s].posts[n].shifts.length,k=t[s].posts[n].shifts[g-1];t[s].posts[n].shifts[u]=k,t[s].posts[n].shifts.splice(u+1,1),t[s].posts[n].shifts.pop()}}for(var D=0;D<t[e].posts[r].shifts.length-1;D++){console.log(t[e].posts[r].shifts);var y=t[e].posts[r].shifts[D],I=t[e].posts[r].shifts[D+1];if(console.log(y),console.log(I),y.shiftStart+y.shiftLength===I.shiftStart&&y.workerId===I.workerId){t[e].posts[r].shifts.push({workerId:y.workerId,shiftStart:y.shiftStart,shiftLength:y.shiftLength+I.shiftLength,shiftId:"d".concat(e,"p").concat(r,"s").concat(y.shiftStart,"w").concat(o)});var w=t[e].posts[r].shifts.length,S=t[e].posts[r].shifts[w-1];t[e].posts[r].shifts[D]=S,t[e].posts[r].shifts.splice(D+1,1),t[e].posts[r].shifts.pop()}}}}},a.bringWorkerID7=function(t){},a.higherBarView=function(){return"in"===a.state.higherBarView?s.a.createElement("div",{style:{display:"flex",position:"relative"}},s.a.createElement("div",null,s.a.createElement(h.b,{to:"/login"},s.a.createElement("button",null,"log in"))),s.a.createElement("div",null,s.a.createElement(h.b,{to:"/signup"},s.a.createElement("button",null,"signup")))):"out"===a.state.higherBarView?s.a.createElement("div",{style:{display:"flex",position:"relative"}},s.a.createElement("div",null,s.a.createElement(h.b,{to:"/"},s.a.createElement("button",{onClick:function(){return a.setState({higherBarView:"in"})}},"logout"))),s.a.createElement("div",null,"hello user")):void 0},a.lowerBarView=function(){return"in"===a.state.higherBarView?s.a.createElement("div",{style:{display:"flex",position:"relative"}}):"out"===a.state.higherBarView?s.a.createElement("div",{style:{display:"flex",position:"relative"}},s.a.createElement("div",null,s.a.createElement(h.b,{to:"/planner"},s.a.createElement("button",null,"Planner"))),s.a.createElement("div",null,s.a.createElement(h.b,{to:"/personal"},s.a.createElement("button",null,"Personal"))),s.a.createElement("div",null,s.a.createElement(h.b,{to:"/setplanner"},s.a.createElement("button",null,"Set Planner"))),s.a.createElement("div",null,s.a.createElement(h.b,{to:"/history"},s.a.createElement("button",null,"History")))):void 0},a.login=function(){a.setState({higherBarView:"out"})},a.state={shiftSet:[{name:"Su",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Mo",posts:[{name:"post6",shifts:[]},{name:"post7",shifts:[]},{name:"post8",shifts:[]}]},{name:"Tu",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"We",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Th",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]},{name:"Fr",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]},{name:"post4",shifts:[]}]},{name:"Sa",posts:[{name:"post1",shifts:[]},{name:"post2",shifts:[]},{name:"post3",shifts:[]}]}],workerDB:[{id:0,name:"draggable 1",color:"#ff0000"},{id:1,name:"draggable 2",color:"#00aa00"},{id:2,name:"draggable 3",color:"#6666ff"},{id:3,name:"draggable 4",color:"#ffff00"},{id:4,name:"draggable 5",color:"#ff00ff"},{id:124,name:"draggable 6",color:"#00ffff"}],markerPlaceDay:void 0,markerPlacePost:void 0,markerWorkerID:void 0,higherBarView:"in"},a}return Object(c.a)(r,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement("div",{style:{display:"flex",flexDirection:"column",position:"relative"}},s.a.createElement("div",{style:{alignSelf:"flex-end"}},this.higherBarView()),s.a.createElement("div",null,this.lowerBarView())),s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"/planner",component:function(){return s.a.createElement(y,{placeMarker6:t.placeMarker7,deleteMarker6:t.deleteMarker7,addShiftToDB6:t.addShiftToDB7,bringWorkerID6:t.bringWorkerID7,swapShifts5:t.swapShifts6,workerDB1:t.state.workerDB,markerWorkerID1:t.state.markerWorkerID,shiftSet1:t.state.shiftSet,markerPlaceDay1:t.state.markerPlaceDay,markerPlacePost1:t.state.markerPlacePost})}}),s.a.createElement(d.a,{exact:!0,path:"/personal",component:function(){return s.a.createElement(w,{workerDB:t.state.workerDB})}}),this.state.workerDB.map((function(e,r){return s.a.createElement(d.a,{exact:!0,path:"/worker".concat(e.id),key:r,component:function(){return s.a.createElement(B,{workerDB:t.state.workerDB,workerID:e.id,key:r})}})})),s.a.createElement(d.a,{exact:!0,path:"/history",component:function(){return s.a.createElement(S,null)}}),s.a.createElement(d.a,{exact:!0,path:"/setplanner",component:function(){return s.a.createElement(b,null)}}),s.a.createElement(d.a,{exact:!0,path:"/",component:function(){return s.a.createElement(E,null)}}),s.a.createElement(d.a,{exact:!0,path:"/login",component:function(){return s.a.createElement(O,{login:t.login})}}),s.a.createElement(d.a,{exact:!0,path:"/signup",component:function(){return s.a.createElement(j,null)}}))))}}]),r}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(52);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f6684140.chunk.js.map