function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Output */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:7"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:7";
	/* <S2>/Out */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:3"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:3";
	/* <S2>/Output */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:4"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:4";
	/* <S2>/Vector */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:5"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:5";
	/* <S4>/DTC1 */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:32"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:32";
	/* <S4>/LUT */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:33"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:33";
	/* <S5>/Data Type
Propagation */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:1"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:1";
	/* <S5>/Output */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:4"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:4";
	/* <S6>/FixPt
Constant */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:3:2"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:3:2";
	/* <S6>/FixPt
Data Type
Duplicate */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:3:3"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:3:3";
	/* <S6>/FixPt
Sum1 */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:3:4"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:3:4";
	/* <S7>/Constant */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:5:4"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:5:4";
	/* <S7>/FixPt
Data Type
Duplicate1 */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:5:2"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:5:2";
	/* <S7>/FixPt
Switch */
	this.urlHashMap["ModelWithApproximation_20210821T210314460:6:2:5:3"] = "msg=rtwMsg_notTraceable&block=ModelWithApproximation_20210821T210314460:6:2:5:3";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "ModelWithApproximation_20210821T210314460"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Approximation"] = {sid: "ModelWithApproximation_20210821T210314460:23"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:23"] = {rtwname: "<Root>/Approximation"};
	this.rtwnameHashMap["<Root>/Input1"] = {sid: "ModelWithApproximation_20210821T210314460:6"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6"] = {rtwname: "<Root>/Input1"};
	this.rtwnameHashMap["<Root>/Output"] = {sid: "ModelWithApproximation_20210821T210314460:7"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:7"] = {rtwname: "<Root>/Output"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "ModelWithApproximation_20210821T210314460:24"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:24"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Approximate"] = {sid: "ModelWithApproximation_20210821T210314460:26"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:26"] = {rtwname: "<S1>/Approximate"};
	this.rtwnameHashMap["<S1>/Original"] = {sid: "ModelWithApproximation_20210821T210314460:12"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:12"] = {rtwname: "<S1>/Original"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "ModelWithApproximation_20210821T210314460:25"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:25"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/Force to be scalar"] = {sid: "ModelWithApproximation_20210821T210314460:6:1"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:1"] = {rtwname: "<S2>/Force to be scalar"};
	this.rtwnameHashMap["<S2>/LimitedCounter"] = {sid: "ModelWithApproximation_20210821T210314460:6:2"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2"] = {rtwname: "<S2>/LimitedCounter"};
	this.rtwnameHashMap["<S2>/Out"] = {sid: "ModelWithApproximation_20210821T210314460:6:3"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:3"] = {rtwname: "<S2>/Out"};
	this.rtwnameHashMap["<S2>/Output"] = {sid: "ModelWithApproximation_20210821T210314460:6:4"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:4"] = {rtwname: "<S2>/Output"};
	this.rtwnameHashMap["<S2>/Vector"] = {sid: "ModelWithApproximation_20210821T210314460:6:5"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:5"] = {rtwname: "<S2>/Vector"};
	this.rtwnameHashMap["<S2>/y"] = {sid: "ModelWithApproximation_20210821T210314460:6:6"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:6"] = {rtwname: "<S2>/y"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "ModelWithApproximation_20210821T210314460:27"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:27"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/Source"] = {sid: "ModelWithApproximation_20210821T210314460:30"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:30"] = {rtwname: "<S3>/Source"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "ModelWithApproximation_20210821T210314460:36"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:36"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "ModelWithApproximation_20210821T210314460:31"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:31"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/DTC1"] = {sid: "ModelWithApproximation_20210821T210314460:32"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:32"] = {rtwname: "<S4>/DTC1"};
	this.rtwnameHashMap["<S4>/LUT"] = {sid: "ModelWithApproximation_20210821T210314460:33"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:33"] = {rtwname: "<S4>/LUT"};
	this.rtwnameHashMap["<S4>/SigSpec1"] = {sid: "ModelWithApproximation_20210821T210314460:34"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:34"] = {rtwname: "<S4>/SigSpec1"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "ModelWithApproximation_20210821T210314460:35"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:35"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/Data Type Propagation"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:1"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:1"] = {rtwname: "<S5>/Data Type Propagation"};
	this.rtwnameHashMap["<S5>/Force to be scalar"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:2"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:2"] = {rtwname: "<S5>/Force to be scalar"};
	this.rtwnameHashMap["<S5>/Increment Real World"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:3"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:3"] = {rtwname: "<S5>/Increment Real World"};
	this.rtwnameHashMap["<S5>/Output"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:4"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:4"] = {rtwname: "<S5>/Output"};
	this.rtwnameHashMap["<S5>/Wrap To Zero"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:5"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:5"] = {rtwname: "<S5>/Wrap To Zero"};
	this.rtwnameHashMap["<S5>/y"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:6"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:6"] = {rtwname: "<S5>/y"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:3:1"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:3:1"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/FixPt Constant"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:3:2"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:3:2"] = {rtwname: "<S6>/FixPt Constant"};
	this.rtwnameHashMap["<S6>/FixPt Data Type Duplicate"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:3:3"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:3:3"] = {rtwname: "<S6>/FixPt Data Type Duplicate"};
	this.rtwnameHashMap["<S6>/FixPt Sum1"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:3:4"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:3:4"] = {rtwname: "<S6>/FixPt Sum1"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:3:5"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:3:5"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/U"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:5:1"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:5:1"] = {rtwname: "<S7>/U"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:5:4"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:5:4"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/FixPt Data Type Duplicate1"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:5:2"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:5:2"] = {rtwname: "<S7>/FixPt Data Type Duplicate1"};
	this.rtwnameHashMap["<S7>/FixPt Switch"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:5:3"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:5:3"] = {rtwname: "<S7>/FixPt Switch"};
	this.rtwnameHashMap["<S7>/Y"] = {sid: "ModelWithApproximation_20210821T210314460:6:2:5:5"};
	this.sidHashMap["ModelWithApproximation_20210821T210314460:6:2:5:5"] = {rtwname: "<S7>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
