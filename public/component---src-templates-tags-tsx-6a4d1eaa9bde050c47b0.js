(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3cYt":function(n,t){n.exports=function(n){return function(t){return null==n?void 0:n[t]}}},"6nK8":function(n,t,e){e("SRfc");var i=e("dVn5"),a=e("fo6e"),o=e("dt0z"),p=e("9NmV");n.exports=function(n,t,e){return n=o(n),void 0===(t=e?void 0:t)?a(n)?p(n):i(n):n.match(t)||[]}},"9NmV":function(n,t,e){e("SRfc"),e("Oyvg");var i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+i+"]",o="\\d+",p="[\\u2700-\\u27bf]",r="[a-z\\xdf-\\xf6\\xf8-\\xff]",d="[^\\ud800-\\udfff"+i+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",m="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+r+"|"+d+")",c="(?:"+m+"|"+d+")",f="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",u="[\\ufe0e\\ufe0f]?"+f+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",x,s].join("|")+")[\\ufe0e\\ufe0f]?"+f+")*"),g="(?:"+[p,x,s].join("|")+")"+u,h=RegExp([m+"?"+r+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,m,"$"].join("|")+")",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,m+l,"$"].join("|")+")",m+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,g].join("|"),"g");n.exports=function(n){return n.match(h)||[]}},GpQV:function(n,t,e){"use strict";e.d(t,"c",(function(){return o})),e.d(t,"i",(function(){return p})),e.d(t,"h",(function(){return r})),e.d(t,"g",(function(){return d})),e.d(t,"f",(function(){return x})),e.d(t,"l",(function(){return s})),e.d(t,"k",(function(){return m})),e.d(t,"j",(function(){return l})),e.d(t,"b",(function(){return c})),e.d(t,"d",(function(){return f})),e.d(t,"a",(function(){return u})),e.d(t,"e",(function(){return g}));var i=e("vOnD"),a=e("za5s"),o=i.c.div.withConfig({displayName:"templatesstyle__BlogPostsWrapper",componentId:"sc-1xrs0wo-0"})(["\n  margin: 0 auto;\n  padding-top: 120px;\n  position: relative;\n\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n\n  .post_card {\n    margin-bottom: 120px;\n    @media (max-width: 990px) {\n      margin-bottom: 90px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n"]),p=i.c.div.withConfig({displayName:"templatesstyle__RelatedPostWrapper",componentId:"sc-1xrs0wo-1"})(["\n  margin: 0 auto;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),r=i.c.h2.withConfig({displayName:"templatesstyle__RelatedPostTitle",componentId:"sc-1xrs0wo-2"})(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  font-family: ",";\n  letter-spacing: 0.17em;\n  position: relative;\n  margin-bottom: 30px;\n\n  &:after {\n    content: '';\n    width: 68px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-top: 8px;\n  }\n"],Object(a.a)("colors.textColor","#292929"),Object(a.a)("fontFamily.0","'Fira Sans',sans-serif")),d=i.c.div.withConfig({displayName:"templatesstyle__RelatedPostItems",componentId:"sc-1xrs0wo-3"})(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n"]),x=i.c.div.withConfig({displayName:"templatesstyle__RelatedPostItem",componentId:"sc-1xrs0wo-4"})(["\n  flex: 0 0 33.333333333%;\n  max-width: 33.333333333%;\n  padding: 0 15px;\n  @media (max-width: 575px) {\n    flex: 0 0 100%;\n    max-width: 100%;\n    &:nth-child(n + 2) {\n      margin-top: 50px;\n    }\n  }\n  .post_card {\n    &:hover {\n      .post_preview {\n        a {\n          transform: scale(1.05);\n        }\n      }\n    }\n\n    .post_preview {\n      margin-bottom: 16px;\n      overflow: hidden;\n      a {\n        display: block;\n        transition: 0.25s ease-in-out;\n      }\n      &:before {\n        filter: blur(10px);\n      }\n    }\n    .post_title {\n      font-size: 21px;\n      a {\n        display: block;\n        white-space: nowrap;\n        width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      @media (max-width: 1400px) {\n        font-size: 19px;\n      }\n      @media (max-width: 1200px) {\n        font-size: 17px;\n      }\n      @media (max-width: 990px) {\n        font-size: 15px;\n      }\n    }\n    .post_content {\n      max-width: 100%;\n    }\n\n    .post_tags {\n      margin-top: 20px;\n      a {\n        @media (max-width: 990px) {\n          font-size: 12px;\n          margin-right: 15px;\n        }\n      }\n    }\n  }\n"]),s=i.c.div.withConfig({displayName:"templatesstyle__TagPostsWrapper",componentId:"sc-1xrs0wo-5"})(["\n  margin: 0 auto;\n  padding-top: 120px;\n  position: relative;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 30px 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n\n  .post_card {\n    margin-bottom: 120px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n    @media (max-width: 990px) {\n      margin-bottom: 80px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n"]),m=i.c.div.withConfig({displayName:"templatesstyle__TagPageHeading",componentId:"sc-1xrs0wo-6"})(["\n  padding-left: 210px;\n  font-size: 15px;\n  font-weight: 400;\n  margin-bottom: 120px;\n  position: relative;\n  @media (max-width: 1200px) {\n    padding-left: 160px;\n  }\n  @media (max-width: 990px) {\n    padding-left: 0;\n    font-size: 13px;\n    margin-bottom: 80px;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 60px;\n  }\n\n  &:after {\n    content: '';\n    display: block;\n    width: 90px;\n    height: 1px;\n    background: #292929;\n    margin-top: 15px;\n  }\n"]),l=i.c.h1.withConfig({displayName:"templatesstyle__TagName",componentId:"sc-1xrs0wo-7"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 8px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(a.a)("colors.primary","#1D95D1")),c=i.c.div.withConfig({displayName:"templatesstyle__BlogPostFooter",componentId:"sc-1xrs0wo-8"})(["\n  margin: 0 auto;\n  width: 870px;\n  max-width: 100%;\n  padding-top: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 990px) {\n    padding-top: 40px;\n  }\n"]),f=i.c.div.withConfig({displayName:"templatesstyle__PostShare",componentId:"sc-1xrs0wo-9"})(["\n  display: flex;\n  align-items: center;\n  > span {\n    flex-shrink: 0;\n  }\n  > div,\n  .SocialMediaShareButton {\n    cursor: pointer;\n    margin-left: 25px;\n    font-size: 22px;\n    outline: 0;\n    color: ",";\n    transition: 0.15s ease-in-out;\n    @media (max-width: 767px) {\n      font-size: 18px;\n      margin-left: 20px;\n    }\n    &:hover {\n      color: ",";\n    }\n    svg {\n      display: block;\n    }\n  }\n"],Object(a.a)("colors.textColor","#292929"),Object(a.a)("colors.primary","#1D95D1")),u=i.c.div.withConfig({displayName:"templatesstyle__BlogPostDetailsWrapper",componentId:"sc-1xrs0wo-10"})(["\n  margin: 0 auto;\n  padding: 90px 0 120px 0;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),g=i.c.div.withConfig({displayName:"templatesstyle__PostTags",componentId:"sc-1xrs0wo-11"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(a.a)("primary","#1D95D1"))},N1om:function(n,t,e){var i=e("sgoq")((function(n,t,e){return n+(e?"-":"")+t.toLowerCase()}));n.exports=i},NnCg:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return x}));var i=e("q1tI"),a=e.n(i),o=e("9Dj+"),p=e("t3iN"),r=e("H8eV"),d=e("GpQV");t.default=function(n){var t=n.pageContext,e=n.data,i=t.tag,x=e.allMarkdownRemark,s=x.edges,m=x.totalCount;return a.a.createElement(o.a,null,a.a.createElement(r.a,{title:i,description:"A collection of "+m+" post"}),a.a.createElement(d.l,null,a.a.createElement(d.k,null,a.a.createElement(d.j,null,i),"A collection of "+m+" post"),s.map((function(n){var t=n.node;n.index;return a.a.createElement(p.a,{key:t.fields.slug,title:t.frontmatter.title,url:t.fields.slug,description:t.frontmatter.description||t.excerpt,date:t.frontmatter.date,tags:t.frontmatter.tags})}))))};var x="3346775015"},TKrE:function(n,t,e){e("pIFo"),e("Oyvg");var i=e("qRkn"),a=e("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,p=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=a(n))&&n.replace(o,i).replace(p,"")}},asDA:function(n,t){n.exports=function(n,t,e,i){var a=-1,o=null==n?0:n.length;for(i&&o&&(e=n[++a]);++a<o;)e=t(e,n[a],a,n);return e}},dVn5:function(n,t,e){e("SRfc");var i=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(i)||[]}},dt0z:function(n,t,e){var i=e("zoYe");n.exports=function(n){return null==n?"":i(n)}},eUgh:function(n,t){n.exports=function(n,t){for(var e=-1,i=null==n?0:n.length,a=Array(i);++e<i;)a[e]=t(n[e],e,n);return a}},fo6e:function(n,t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return e.test(n)}},qRkn:function(n,t,e){var i=e("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});n.exports=i},sgoq:function(n,t,e){e("pIFo"),e("Oyvg");var i=e("asDA"),a=e("TKrE"),o=e("6nK8"),p=RegExp("['’]","g");n.exports=function(n){return function(t){return i(o(a(t).replace(p,"")),n,"")}}},t3iN:function(n,t,e){"use strict";e("rGqo"),e("yt8O"),e("Btvt"),e("RW0V"),e("91GP");var i=e("N1om"),a=e.n(i),o=e("q1tI"),p=e("Wbzz"),r=e("9eSz"),d=e.n(r),x=e("vOnD"),s=e("za5s"),m=x.c.div.withConfig({displayName:"postCardstyle__PostCardWrapper",componentId:"gwy97h-0"})(["\n  position: relative;\n"]),l=x.c.div.withConfig({displayName:"postCardstyle__PostPreview",componentId:"gwy97h-1"})(["\n  margin-bottom: 45px;\n  position: relative;\n  img {\n    border-radius: 3px;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 80%;\n    height: 80%;\n    background-color: #757575;\n    bottom: 0;\n    left: 10%;\n    filter: blur(15px);\n  }\n"]),c=x.c.div.withConfig({displayName:"postCardstyle__PostDetails",componentId:"gwy97h-2"})(["\n  display: flex;\n"]),f=x.c.div.withConfig({displayName:"postCardstyle__PostDate",componentId:"gwy97h-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  padding: 30px 35px 15px 35px;\n  margin-right: 20px;\n  line-height: 1;\n  color: ",";\n  @media (max-width: 1200px) {\n    font-size: 70px;\n    padding: 25px 25px 15px 25px;\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n    padding: 20px 20px 15px 20px;\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(s.a)("colors.textColor","#292929")),u=x.c.div.withConfig({displayName:"postCardstyle__PostContent",componentId:"gwy97h-4"})(["\n  align-self: center;\n"]),g=x.c.h2.withConfig({displayName:"postCardstyle__PostTitle",componentId:"gwy97h-5"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n"],Object(s.a)("colors.textColor","#292929"),Object(s.a)("colors.textColor","#292929")),h=x.c.p.withConfig({displayName:"postCardstyle__Excerpt",componentId:"gwy97h-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(s.a)("fontSizes.3","15"),Object(s.a)("textColor","#292929")),w=x.c.div.withConfig({displayName:"postCardstyle__PostTags",componentId:"gwy97h-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(s.a)("primary","#1D95D1"));var y=function(n){var t=n.image,e=n.title,i=n.description,r=n.url,x=n.date,s=n.tags,y=n.className,v=n.imageType,b=function(n,t){if(null==n)return{};var e,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["image","title","description","url","date","tags","className","imageType"]),_=["post_card"];return y&&_.push(y),o.createElement(m,Object.assign({className:_.join(" ")},b),null==t?null:o.createElement(l,{className:"post_preview"},o.createElement(p.Link,{to:r},"fluid"===v?o.createElement(d.a,{fluid:t,alt:"post preview"}):o.createElement(d.a,{fixed:t,alt:"post preview"}))),o.createElement(c,{className:"post_details"},x&&o.createElement(f,{dangerouslySetInnerHTML:{__html:x},className:"post_date"}),o.createElement(u,{className:"post_content"},o.createElement(g,{className:"post_title"},o.createElement(p.Link,{to:r},e)),i&&o.createElement(h,{dangerouslySetInnerHTML:{__html:i},className:"excerpt"}),null==s?null:o.createElement(w,{className:"post_tags"},s.map((function(n,t){return o.createElement(p.Link,{key:t,to:"/tags/"+a()(n)+"/"},"#"+n)}))))))};y.defaultProps={imageType:"fluid"};t.a=y},zoYe:function(n,t,e){e("a1Th"),e("h7Nl"),e("Btvt");var i=e("nmnc"),a=e("eUgh"),o=e("Z0cm"),p=e("/9aa"),r=i?i.prototype:void 0,d=r?r.toString:void 0;n.exports=function n(t){if("string"==typeof t)return t;if(o(t))return a(t,n)+"";if(p(t))return d?d.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-6a4d1eaa9bde050c47b0.js.map