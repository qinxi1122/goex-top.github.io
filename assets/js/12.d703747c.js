(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),n("h2",{attrs:{id:"安装-goex-库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-goex-库"}},[t._v("#")]),t._v(" 安装 GoEx 库")]),t._v(" "),n("p",[n("code",[t._v("go get github.com/nntaoli-project/GoEx")])]),t._v(" "),n("h2",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/nntaoli-project/GoEx"')]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/nntaoli-project/GoEx/builder"')]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \tapiBuilder "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" builder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewAPIBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//apiBuilder := builder.NewAPIBuilder().HttpTimeout(5 * time.Second).HttpProxy("socks5://127.0.0.1:1080")')]),t._v("\n\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//build spot api")]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//api := apiBuilder.APIKey("").APISecretkey("").ClientID("123").Build(goex.BITSTAMP)')]),t._v("\n   \tapi "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" apiBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("APIKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("APISecretkey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HUOBI_PRO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetExchangeName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetTicker")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BTC_USD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetDepth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BTC_USD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//log.Println(api.GetAccount())")]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//log.Println(api.GetUnfinishOrders(goex.BTC_USD))")]),t._v("\n\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//build future api")]),t._v("\n   \tfutureApi "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" apiBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("APIKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("APISecretkey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildFuture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HBDM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("futureApi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetExchangeName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("futureApi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFutureTicker")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BTC_USD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QUARTER_CONTRACT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("futureApi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFutureDepth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BTC_USD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QUARTER_CONTRACT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//log.Println(futureApi.GetFutureUserinfo()) // account")]),t._v("\n   \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//log.Println(futureApi.GetFuturePosition(goex.BTC_USD , goex.QUARTER_CONTRACT))//position info")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br")])]),n("h2",{attrs:{id:"websocket-使用例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-使用例子"}},[t._v("#")]),t._v(" websocket 使用例子")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/nntaoli-project/GoEx"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/nntaoli-project/GoEx/huobi"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"github.com/nntaoli-project/GoEx/okcoin"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ws := okcoin.NewOKExFutureWs() //ok期货")]),t._v("\n\tws "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" huobi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewHbdmWs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//huobi期货")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置回调函数")]),t._v("\n\tws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetCallbacks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ticker "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FutureTicker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ticker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Depth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trade "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trade"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contract "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trade"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//订阅行情")]),t._v("\n\tws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubscribeTrade")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BTC_USDT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NEXT_WEEK_CONTRACT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubscribeDepth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BTC_USDT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QUARTER_CONTRACT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubscribeTicker")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BTC_USDT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" goex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QUARTER_CONTRACT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);