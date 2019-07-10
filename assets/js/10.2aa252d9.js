(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(t,e,n){"use strict";n.r(e);var i=n(0),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),n("h2",{attrs:{id:"安装goex库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装goex库","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装GoEx库")]),t._v(" "),n("p",[n("code",[t._v("go get github.com/nntaoli-project/GoEx")])]),t._v(" "),n("h2",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n   package main\n   \n   import (\n   \t"github.com/nntaoli-project/GoEx"\n   \t"github.com/nntaoli-project/GoEx/builder"\n   \t"log"\n   \t"time"\n   )\n   \n   func main() {\n   \tapiBuilder := builder.NewAPIBuilder().HttpTimeout(5 * time.Second)\n   \t//apiBuilder := builder.NewAPIBuilder().HttpTimeout(5 * time.Second).HttpProxy("socks5://127.0.0.1:1080")\n   \t\n   \t//build spot api\n   \t//api := apiBuilder.APIKey("").APISecretkey("").ClientID("123").Build(goex.BITSTAMP)\n   \tapi := apiBuilder.APIKey("").APISecretkey("").Build(goex.HUOBI_PRO)\n   \tlog.Println(api.GetExchangeName())\n   \tlog.Println(api.GetTicker(goex.BTC_USD))\n   \tlog.Println(api.GetDepth(2, goex.BTC_USD))\n   \t//log.Println(api.GetAccount())\n   \t//log.Println(api.GetUnfinishOrders(goex.BTC_USD))\n   \n   \t//build future api\n   \tfutureApi := apiBuilder.APIKey("").APISecretkey("").BuildFuture(goex.HBDM)\n   \tlog.Println(futureApi.GetExchangeName())\n   \tlog.Println(futureApi.GetFutureTicker(goex.BTC_USD, goex.QUARTER_CONTRACT))\n   \tlog.Println(futureApi.GetFutureDepth(goex.BTC_USD, goex.QUARTER_CONTRACT, 5))\n   \t//log.Println(futureApi.GetFutureUserinfo()) // account\n   \t//log.Println(futureApi.GetFuturePosition(goex.BTC_USD , goex.QUARTER_CONTRACT))//position info\n   }\n\n')])])]),n("h2",{attrs:{id:"websocket-使用例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-使用例子","aria-hidden":"true"}},[t._v("#")]),t._v(" websocket 使用例子")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import (\n\t"github.com/nntaoli-project/GoEx"\n\t"github.com/nntaoli-project/GoEx/huobi"\n\t//"github.com/nntaoli-project/GoEx/okcoin"\n\t"log"\n)\n\nfunc main() {\n\n\t//ws := okcoin.NewOKExFutureWs() //ok期货\n\tws := huobi.NewHbdmWs() //huobi期货\n\t//设置回调函数\n\tws.SetCallbacks(func(ticker *goex.FutureTicker) {\n\t\tlog.Println(ticker)\n\t}, func(depth *goex.Depth) {\n\t\tlog.Println(depth)\n\t}, func(trade *goex.Trade, contract string) {\n\t\tlog.Println(contract, trade)\n\t})\n\t//订阅行情\n\tws.SubscribeTrade(goex.BTC_USDT, goex.NEXT_WEEK_CONTRACT)\n\tws.SubscribeDepth(goex.BTC_USDT, goex.QUARTER_CONTRACT, 5)\n\tws.SubscribeTicker(goex.BTC_USDT, goex.QUARTER_CONTRACT)\n}  \n\n')])])])])}],!1,null,null,null);e.default=r.exports}}]);