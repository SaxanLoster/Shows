Array.prototype.has = function( string ){
  var bool = false
  for( var i = 0 ; i < this.length ; i++ ){
    if( this[ i ] == string ) bool = true
    }
  return bool
  }
Array.prototype.last = function(){
  return ( this[ this.length -1 ] )
  }
Array.prototype.random = function(){
  return this[ Math.F( Math.random() * this.length ) ]
  }
Math.average = function(){
  var Total = 0
  for( var i = 0 ; i < arguments.length ; i++ ) Total += arguments[ i ]
  return Total / arguments.length
  }
Math.C = Math.ceil , Math.F = Math.floor , Math.R = Math.round
Number.prototype.pad = function( size , text ){
  var i = 0
  var n = this < 0
  var s = ''
  var t = text || '0'
  var z = Math.max( size , this.toString().length )
  while( s.length < z - 1 ){
    s += t[ i ]
    i = i + 1 == t.length ? 0 : i + 1
    }
  s = t == '0' && n ? '-' + s : t + s
  s = t == '0'
    ? s.slice( 0 , z - Math.abs( this ).toString().length ) + Math.abs( this )
    : s.slice( 0 , z - this.toString().length ) + this
  return s
  }
Number.prototype.C = function( Size ){
  var S = Math.pow( 10 , Size )
  return Math.C( this * S ) / S
  }
Number.prototype.F = function( Size ){
  var S = Math.pow( 10 , Size )
  return Math.F( this * S ) / S
  }
Number.prototype.R = function( Size ){
  var S = Math.pow( 10 , Size )
  return Math.R( this * S ) / S
  }
String.prototype.has = function( string ){
  return ( this.match( string ) != null )
  }
String.prototype.padB = function( size , text ){
  text = text == 'enum' ? '1234567890' : text
  var i = 0
  var s = ''
  var t = text || ' '
  var z = Math.max( size , this.length )
  while( s.length < z ){
    s += t[ i ]
    i = i + 1 == t.length ? 0 : i + 1
    }
  s = s.substr( 0 , ( z - this.length ) / 2 ) + this + s.substr( ( z + this.length ) / 2 , z )
  return s
  }
String.prototype.padL = function( size , text ){
  text = text == 'enum' ? '1234567890' : text
  var i = 0
  var s = ''
  var t = text || ' '
  var z = Math.max( size , this.length )
  while( s.length < z ){
    s += t[ i ]
    i = i + 1 == t.length ? 0 : i + 1
    }
  return s.slice( 0 , z - this.length ) + this
  }
String.prototype.padR = function( size , text ){
  text = text == 'enum' ? '1234567890' : text
  var i = 0
  var s = ''
  var t = text || ' '
  var z = Math.max( size , this.length )
  while( s.length < z ){
    s += t[ i ]
    i = i + 1 == t.length ? 0 : i + 1
    }
  return this + s.slice( this.length )
  }
String.prototype.toHyperLink = function(){
  return encodeURIComponent( this ).replace( /'/g , '\\\'' )
  }
String.prototype.toTitleCase = function(){
  return this.replace( /[^\W_][^\s_.()]*/g , function( txt ){ 
    return txt.charAt( 0 ).toUpperCase() + txt.substr( 1 ).toLowerCase()
    } )
  }
function BackgroundShapes( Canvas , Count , Radius , Variety , RC , Rotation , Main ){
  for( var i = 0 ; i < Count ; i++ ){
    var A = Random( Radius.Min , Radius.Max )
    var B = { X: Random( ( -A * .25 ) , Canvas.W + ( A * .25 ) ) , Y: Random( ( -A * .25 ) , Canvas.H + ( A * .25 ) ) }
    var C = Random( Variety.Min , Variety.Max )
    var D = [ Random( 1 , C ) , Random( 1 , C ) ]
    var E = [ [] , [] ]
    for( var j = 0 ; j < D[ 0 ] ; j++ ) E[ 0 ].push( RandomColor( 'HSL' , RC ) )
    for( var j = 0 ; j < D[ 1 ] ; j++ ) E[ 1 ].push( RandomColor( 'HSL' , RC ) )
    var F = { Color: E[ 0 ] , ColorCircle: E[ 0 ] , ColorLine: E[ 1 ] , Width: 1 }
    var G = Rotation ? Random( 1 , 360 ) : 0
    RotateItem( Canvas.E , { X: Canvas.X , Y: Canvas.Y } , G , function(){ Main( Canvas.E , B , A , C , F ) } )
    }
  }
function BackgroundEven( Canvas , Radius , Variety , RC , Rotation , Main ){
  var A = Math.F( innerWidth  / Radius / 2 )
  var B = Math.F( innerHeight / Radius / 2 )
  var C = Math.F( innerWidth  / A )
  var D = Math.F( innerHeight / B )
  var E = ( innerWidth  - ( A * C ) ) / 2
  var F = ( innerHeight - ( B * D ) ) / 2
  var G = []
  for( var i = 0 ; i < A ; i++ ){
    for( var j = 0 ; j < B ; j++ ){
      G.push( { X: ( E + C * i + C / 2 ) , Y: ( F + D * j + D / 2 ) } )
      }
    }
  for( var i = 0 ; i < G.length ; i++ ){
    var H = Rotation ? Math.F( Math.random() * 360 ) : 0
    var I = Math.F( Math.random() * ( 1 + Variety.Max - Variety.Min ) + Variety.Min )
    var J = [ Math.F( Math.random() * I + 1 ) , Math.F( Math.random() * I + 1 ) ]
    var K = [ [] , [] ]
    for( var j = 0 ; j < J[ 0 ] ; j++ ) K[ 0 ].push( RandomColor( 'HSL' , RC ) )
    for( var j = 0 ; j < J[ 1 ] ; j++ ) K[ 1 ].push( RandomColor( 'HSL' , RC ) )
    var L = { Color: K[ 0 ] , ColorCircle: K[ 0 ] , ColorLine: K[ 1 ] , Width: 1 }
    RotateItem( Canvas.E , G[ i ] , H , function(){ Main( Canvas.E , G[ i ] , Radius , I , L ) } )
    }
  }
function cc(){
  var O = []
  var S = []
  var s = ''
  var d = new Date()
  for( var i = 0 ; i < arguments.length ; i++ ) typeof arguments[ i ] == 'object' ? O.push( arguments[ i ] ) : S.push( arguments[ i ] )
  s += d.getHours().pad( 2 ) + ':' + d.getMinutes().pad( 2 ) + ':' + d.getSeconds().pad( 2 )
  for( var i = 0 ; i < S.length ; i++ ) s += ' | ' + S[ i ]
  if( s != '' ) console.log( s )
  for( var i = 0 ; i < O.length ; i++ ) console.dir( O[ i ] )
  //console.trace()
  }
function ccss( theClass , attribute , value , sheet ){
  var a = attribute
  var c = theClass.toLowerCase()
  var d = document.styleSheets[ sheet ]
  var r = d.cssRules || d.rules
  var s = ''
  var b = false
  var v = ( typeof value == 'number' ) ? value.toString() : value
  for( var i = 0 ; i < r.length ; i++ ){
    s = r[ i ].selectorText.toLowerCase()
    if( c == s ){
      b = true
      r[ i ].style[ a ] = v
      return
      }
    }
  if( !b ){
    try{
      d.insertRule( c + '{  }' , r.length )
      }
    catch( err ){
      d.addRule( c , '' , r.length )
      }
    r[ r.length - 1 ].selectorText = c
    r[ r.length - 1 ].style[ a ]   = v
    }
  }
function coprime( number1 , number2 ){
  var factors1 = []
  var factors2 = []
  for( var i = 2 ; i <= number1 ; i++ ){
    if( number1 % i == 0 ) factors1.push( i )
    }
  for( var i = 2 ; i <= number2 ; i++ ){
    if( number2 % i == 0 ) factors2.push( i )
    }
  for( var i = 0 ; i < factors1.length ; i++ ){
    for( var j = 0 ; j < factors2.length ; j++ ){
      if( factors1[ i ] == factors2[ j ] ) return false
      }
    }
  return true
  }
function customAlert( TextTop , TextMid , TextBot , Clock ){
  ButtonSize = function(){
    document.getElementById( 'AlertButton' ).style.fontSize   = ( document.getElementById( 'AlertButton' ).offsetHeight / 2 ).toString() + 'px'
    document.getElementById( 'AlertButton' ).style.lineHeight = ( document.getElementById( 'AlertButton' ).offsetHeight - 2 ).toString() + 'px'
    }
  var Close = function(){
    document.getElementsByTagName( 'body' )[ 0 ].removeChild( document.getElementById( 'AlertFiller' ) )
    window.removeEventListener( 'resize' , ButtonSize )
    }
  var Main = document.getElementsByTagName( 'body' )[ 0 ]
  var AlertFiller = document.createElement( 'div' )
    AlertFiller.id = 'AlertFiller'
    AlertFiller.style.backgroundColor = '#000'
    AlertFiller.style.display = 'block'
    AlertFiller.style.height = '100%'
    AlertFiller.style.margin = 'auto'
    AlertFiller.style.opacity = '1'
    AlertFiller.style.position = 'fixed'
    AlertFiller.style.bottom = '0'
    AlertFiller.style.left = '0'
    AlertFiller.style.right = '0'
    AlertFiller.style.top = '0'
    AlertFiller.style.width = '100%'
    AlertFiller.style.zIndex = '10'
  var AlertBorder = document.createElement( 'div' )
    AlertBorder.id = 'AlertBorder'
    AlertBorder.style.backgroundColor = '#222'
    AlertBorder.style.borderRadius = '10px'
    AlertBorder.style.boxSizing = 'content-box'
    AlertBorder.style.MozBoxSizing = 'content-box'
    AlertBorder.style.color = '#FFF'
    AlertBorder.style.display = 'block'
    AlertBorder.style.fontSize = '20px'
    AlertBorder.style.height = '75%'
    AlertBorder.style.margin = 'auto'
    AlertBorder.style.maxHeight = '600px'
    AlertBorder.style.maxWidth = '800px'
    AlertBorder.style.position = 'fixed'
    AlertBorder.style.bottom = '0'
    AlertBorder.style.left = '0'
    AlertBorder.style.right = '0'
    AlertBorder.style.top = '0'
    AlertBorder.style.width = '75%'
    AlertBorder.style.zIndex = '11'
  var AlertHolder = document.createElement( 'div' )
    AlertHolder.id = 'AlertHolder'
    AlertHolder.style.height = 'calc( 100% - 20px )'
    AlertHolder.style.margin = '10px'
    AlertHolder.style.position = 'absolute'
    AlertHolder.style.bottom = '0'
    AlertHolder.style.left = '0'
    AlertHolder.style.right = '0'
    AlertHolder.style.top = '0'
    AlertHolder.style.width = 'calc( 100% - 20px )'
  var AlertHeader = document.createElement( 'div' )
    AlertHeader.id = 'AlertHeader'
    AlertHeader.innerHTML = TextTop
    AlertHeader.style.alignContent = 'center'
    AlertHeader.style.backgroundColor = '#444'
    AlertHeader.style.borderRadius = '5px 5px 0 0'
    AlertHeader.style.boxSizing = 'border-box'
    AlertHeader.style.display = 'flex'
    AlertHeader.style.flexDirection = 'column'
    AlertHeader.style.fontSize = '36px'
    AlertHeader.style.fontVariant = 'small-caps'
    AlertHeader.style.height = '25%'
    AlertHeader.style.justifyContent = 'center'
    AlertHeader.style.letterSpacing = '2px'
    AlertHeader.style.overflow = 'hidden'
    AlertHeader.style.position = 'relative'
    AlertHeader.style.textAlign = 'center'
    AlertHeader.style.verticalAlign = 'middle'
    AlertHeader.style.width = '100%'
  var AlertCenter = document.createElement( 'div' )
    AlertCenter.id = 'AlertCenter'
    AlertCenter.innerHTML = TextMid
    AlertCenter.style.backgroundColor = '#666'
    AlertCenter.style.boxSizing = 'border-box'
    AlertCenter.style.display = 'flex'
    AlertCenter.style.flexDirection = 'column'
    AlertCenter.style.height = '45%'
    AlertCenter.style.justifyContent = 'center'
    AlertCenter.style.overflow = 'hidden'
    AlertCenter.style.position = 'relative'
    AlertCenter.style.textAlign = 'center'
    AlertCenter.style.verticalAlign = 'middle'
    AlertCenter.style.width = '100%'
  var AlertFooter = document.createElement( 'div' )
    AlertFooter.id = 'AlertFooter'
    AlertFooter.style.backgroundColor = '#444'
    AlertFooter.style.borderRadius = '0 0 5px 5px'
    AlertFooter.style.boxSizing = 'border-box'
    AlertFooter.style.display = 'block'
    AlertFooter.style.height = '30%'
    AlertFooter.style.overflow = 'hidden'
    AlertFooter.style.position = 'relative'
    AlertFooter.style.width = '100%'
  var AlertButton = document.createElement( 'div' )
    AlertButton.id = 'AlertButton'
    AlertButton.innerHTML = TextBot
    AlertButton.onclick = Close
    AlertButton.style.backgroundColor = '#999'
    AlertButton.style.border = '1px solid #000'
    AlertButton.style.borderRadius = '25px'
    AlertButton.style.boxSizing = 'border-box'
    AlertButton.style.color = '#000'
    AlertButton.style.cursor = 'pointer'
    AlertButton.style.height = '50%'
    AlertButton.style.justifyContent = 'center'
    AlertButton.style.margin = 'auto'
    AlertButton.style.overflow = 'hidden'
    AlertButton.style.position = 'absolute'
    AlertButton.style.bottom = '0'
    AlertButton.style.left = '0'
    AlertButton.style.right = '0'
    AlertButton.style.top = '0'
    AlertButton.style.textAlign = 'center'
    AlertButton.style.width = '50%'
  Main.appendChild( AlertFiller )
  AlertFiller.appendChild( AlertBorder )
  AlertBorder.appendChild( AlertHolder )
  AlertHolder.appendChild( AlertHeader )
  AlertHolder.appendChild( AlertCenter )
  AlertHolder.appendChild( AlertFooter )
  AlertFooter.appendChild( AlertButton )
  ButtonSize()
  window.addEventListener( 'resize' , ButtonSize )
  if( Clock > 0 ) window[ 'timer' ] = setTimeout( Close , Clock )
  }
function DrawArrow( Canvas , Begin , Close , Style ){
  if( !Style ) var Style = {}
  if( !Style.Color ) Style.Color = '#FFF'
  if( !Style.Width ) Style.Width = 1
  var A = Math.sqrt( Style.Width )
  var B = Math.sqrt( Math.pow( Math.abs( Close.X - Begin.X ) , 2 )     + Math.pow( Math.abs( Close.Y - Begin.Y ) , 2 ) )
  var C = Math.atan( Math.abs( Close.Y - Begin.Y ) / Math.abs( Close.X - Begin.X ) )
  var D
  switch( true ){
    case  ( Close.X - Begin.X < 0 ) &&  ( Close.Y - Begin.Y < 0 ) : D =         + C ; break
    case  ( Close.X - Begin.X < 0 ) && !( Close.Y - Begin.Y < 0 ) : D =         - C ; break
    case !( Close.X - Begin.X < 0 ) &&  ( Close.Y - Begin.Y < 0 ) : D = Math.PI - C ; break
    case !( Close.X - Begin.X < 0 ) && !( Close.Y - Begin.Y < 0 ) : D = Math.PI + C ; break
    }
  Canvas.beginPath()
  Canvas.lineWidth = Style.Width
  Canvas.strokeStyle = Style.Color
  Canvas.lineCap = 'butt'
  Canvas.lineJoin = 'miter'
  Canvas.moveTo( Begin.X , Begin.Y )
  Canvas.lineTo( Close.X , Close.Y )
  Canvas.moveTo( Close.X + B * Math.cos( D - Math.PI / 4 ) * .1 * A , Close.Y + B * Math.sin( D - Math.PI / 4 ) * .1 * A )
  Canvas.lineTo( Close.X , Close.Y )
  Canvas.lineTo( Close.X + B * Math.cos( D + Math.PI / 4 ) * .1 * A , Close.Y + B * Math.sin( D + Math.PI / 4 ) * .1 * A )
  Canvas.stroke()
  Canvas.closePath()
  }
function DrawCircle( Canvas , Center , Radius , Split , Style ){
  if( !Split ) var Split = 1
  if( !Style ) var Style = {}
  if( !Style.Color ) Style.Color = '#FFF'
  if( !Style.Width ) Style.Width = 1
  var ColorCounter = 0
  var ColorPalette = typeof Style.Color == 'string' ? [ Style.Color ] : Style.Color
  var Point1 = 0
  var Point2 = 0
  for( var i = 0 ; i < Split ; i++ ){
    Point1 = Point2
    Point2 = 2 * Math.PI * ( i + 1 ) / Split
    Canvas.beginPath()
    Canvas.lineWidth = Style.Width
    Canvas.strokeStyle = ColorPalette[ ColorCounter ]
    ColorCounter = ColorPalette.length == ColorCounter + 1 ? 0 : ColorCounter + 1
    Canvas.arc( Center.X , Center.Y , Radius , Point1 , Point2 + .001 )
    Canvas.stroke()
    }
  }
function DrawLineGroup( Canvas , Points , Style ){
  if( !Style ) var Style = {}
  if( !Style.Color ) Style.Color = '#FFF'
  if( !Style.Width ) Style.Width = 1
  Canvas.beginPath()
  Canvas.lineWidth = Style.Width
  Canvas.strokeStyle = Style.Color
  Canvas.lineCap = 'round'
  Canvas.lineJoin = 'round'
  Canvas.moveTo( Points[ 0 ].X , Points[ 0 ].Y )
  for( var i = 1 ; i < Points.length ; i++ ) Canvas.lineTo( Points[ i ].X , Points[ i ].Y )
  Canvas.stroke()
  Canvas.closePath()
  }
function DrawLineSingle( Canvas , Begin , Close , Style ){
  if( !Style ) var Style = {}
  if( !Style.Color ) Style.Color = '#FFF'
  if( !Style.Width ) Style.Width = 1
  Canvas.beginPath()
  Canvas.lineWidth = Style.Width
  Canvas.strokeStyle = Style.Color
  Canvas.lineCap = 'round'
  Canvas.moveTo( Begin.X , Begin.Y )
  Canvas.lineTo( Close.X , Close.Y )
  Canvas.stroke()
  Canvas.closePath()
  }
function DrawPolygon( Canvas , Center , Radius , Sides , Style ){
  if( !Style ) var Style = {}
  if( !Style.Color ) Style.Color = '#FFF'
  if( !Style.Width ) Style.Width = 1
  var ColorCounter = 0
  var ColorPalette = typeof Style.Color == 'string' ? [ Style.Color ] : Style.Color
  var A = []
  for( var i = 0 ; i < Sides ; i++ ){
    var X = Center.X + Radius * Math.cos( 2 * Math.PI * i / Sides )
    var Y = Center.Y + Radius * Math.sin( 2 * Math.PI * i / Sides )
    A.push( { X:X , Y:Y } )
    }
  A.push( A[ 0 ] )
  var R = 180 * ( Sides - 2 ) / ( Sides * 2 )
  RotateItem( Canvas , Center , R , function(){
  for( var i = 1 ; i < A.length ; i++ ){
    DrawLineSingle( Canvas , A[ i - 1 ] , A[ i ] , { Color:ColorPalette[ ColorCounter ] } )
    ColorCounter = ColorPalette.length == ColorCounter + 1 ? 0 : ColorCounter + 1
    } } )
  }
function DrawStar( Canvas , Center , Radius , Split , Style ){
  if( !Split ) var Split = 1
  if( !Style ) var Style = {}
  if( !Style.ColorCircle ) Style.ColorCircle = Style.Color || '#FFF'
  if( !Style.ColorLine )   Style.ColorLine   = Style.Color || '#FFF'
  if( !Style.WidthCircle ) Style.WidthCircle = Style.Width || 1
  if( !Style.WidthLine )   Style.WidthLine   = Style.Width || 1
  DrawCircle( Canvas , Center , Radius , Split , { Color:Style.ColorCircle , Width:Style.WidthCircle } )
  Canvas.beginPath()
  var ColorCounter = 0
  var ColorPalette = typeof Style.ColorLine == 'string' ? [ Style.ColorLine ] : Style.ColorLine
  var a = Math.C( Split / 2 )
  while( !coprime( a , Split ) && a > 2 ) a--
  for( var i = 0 ; i < Split ; i++ ){
    var X1 = Math.R( Center.X + ( Radius - Style.WidthCircle / 2 ) * Math.cos( Math.PI * ( 2 * ( i  + 0 ) / Split ) ) )
    var Y1 = Math.R( Center.Y + ( Radius - Style.WidthCircle / 2 ) * Math.sin( Math.PI * ( 2 * ( i  + 0 ) / Split ) ) )
    var X2 = Math.R( Center.X + ( Radius - Style.WidthCircle / 2 ) * Math.cos( Math.PI * ( 2 * ( i  + a ) / Split ) ) )
    var Y2 = Math.R( Center.Y + ( Radius - Style.WidthCircle / 2 ) * Math.sin( Math.PI * ( 2 * ( i  + a ) / Split ) ) )
    DrawLineSingle( Canvas , { X:X1 , Y:Y1 } , { X:X2 , Y:Y2 } , { Color:ColorPalette[ ColorCounter ]  , Width:Style.WidthLine } )
    ColorCounter = ColorPalette.length == ColorCounter + 1 ? 0 : ColorCounter + 1
    }
  Canvas.closePath()
  }
function DrawWheel( Canvas , Center , Radius , Split , Style ){
  if( !Split ) var Split = 1
  if( !Style ) var Style = {}
  if( !Style.ColorCircle ) Style.ColorCircle = Style.Color || '#FFF'
  if( !Style.ColorLine )   Style.ColorLine   = Style.Color || '#FFF'
  if( !Style.WidthCircle ) Style.WidthCircle = Style.Width || 1
  if( !Style.WidthLine )   Style.WidthLine   = Style.Width || 1
  DrawCircle( Canvas , Center , Radius , Split , { Color:Style.ColorCircle , Width:Style.WidthCircle } )
  var ColorCounter = 0
  var ColorPalette = typeof Style.ColorLine == 'string' ? [ Style.ColorLine ] : Style.ColorLine
  for( var i = 0 ; i < Split ; i++ ){
    var X1 = Math.R( Center.X + ( Radius - Style.WidthCircle / 2 ) * Math.cos( Math.PI * ( 2 * i / Split + 0 ) ) )
    var Y1 = Math.R( Center.Y + ( Radius - Style.WidthCircle / 2 ) * Math.sin( Math.PI * ( 2 * i / Split + 0 ) ) )
    DrawLineSingle( Canvas , { X:X1 , Y:Y1 } , { X:Center.X , Y:Center.Y } , { Color:ColorPalette[ ColorCounter ] , Width:Style.WidthLine } )
    ColorCounter = ColorPalette.length == ColorCounter + 1 ? 0 : ColorCounter + 1
    }
  }
function FillCircle( Canvas , Center , Radius , Style ){
  if( !Style ) var Style = {}
  if( !Style.Color ) Style.Color = '#FFF'
  Canvas.beginPath()
  Canvas.fillStyle = Style.Color
  Canvas.arc( Center.X , Center.Y , Radius , 0 , 2 * Math.PI )
  Canvas.fill()
  Canvas.closePath()
  }
function FillPolygon( Canvas , Center , Radius , Sides , Style ){
  if( !Style ) var Style = {}
  if( !Style.Color ) Style.Color = '#FFF'
  Canvas.beginPath()
  Canvas.fillStyle = Style.Color
  var R = 180 * ( Sides - 2 ) / ( Sides * 2 )
  Canvas.translate( Center.X , Center.Y )
  Canvas.rotate( R * Math.PI / 180 )
  Canvas.translate( -Center.X , -Center.Y )
  for( var i = 0 ; i < Sides ; i++ ){
    var X = Center.X + Radius * Math.cos( 2 * Math.PI * i / Sides )
    var Y = Center.Y + Radius * Math.sin( 2 * Math.PI * i / Sides )
    Canvas.lineTo( X , Y )
    }
  Canvas.translate( Center.X , Center.Y )
  Canvas.rotate( -R * Math.PI / 180 )
  Canvas.translate( -Center.X , -Center.Y )
  Canvas.fill()
  Canvas.closePath()
  }
function GetProperties( MyObject , MyString ){
  for( var a in MyObject ){
    var A = MyString ? MyString + '.' + a : a
    if( typeof MyObject[ a ] == 'object' ) GetProperties( MyObject[ a ] , A )
    else if( typeof MyObject[ a ] == 'function' ) continue
    else console.log( A )
    }
  }
function OnClickShapes( Canvas , Radius , Variety , RC , Rotation , Main ){
  window.onclick = function(){
    var A = { X:event.x , Y:event.y }
    var B = Math.F( Math.random() * ( 1 + Variety.Max - Variety.Min ) + Variety.Min )
    var C = [ Math.F( Math.random() * B + 1 ) , Math.F( Math.random() * B + 1 ) ]
    var D = [ [] , [] ]
    for( var i = 0 ; i < C[ 0 ] ; i++ ) D[ 0 ].push( RandomColor( 'HSL' , RC ) )
    for( var i = 0 ; i < C[ 1 ] ; i++ ) D[ 1 ].push( RandomColor( 'HSL' , RC ) )
    console.log( D )
    var E = { Color:D[ 0 ] , ColorCircle:D[ 0 ] , ColorLine:D[ 1 ] , Width:1 }
    var F = Rotation ? Math.F( Math.random() * 360 ) : 0
    RotateItem( Canvas.E , A , F , function(){ Main( Canvas.E , A , Radius , B , E ) } )
    }
  }
function PreventActions( Event ){
  var Alphabet  = Event.which >= 65 && Event.which <= 90 && !Event.ctrlKey
  var SelectAll = Event.which == 65 && Event.ctrlKey
  if( Alphabet || SelectAll ) Event.preventDefault()
  }
function Random( Min , Max ){
  Min = Math.R( Min ) , Max = Math.R( Max )
  return Math.F( Math.random() * ( 1 + Max - Min ) + Min )
  }
function RandomColorRGB( Limit ){
  if( !Limit ) var Limit = {}
  if( !Limit.Min ) Limit.Min = 0
  if( !Limit.Max ) Limit.Max = 255
  if( !Limit.GrayScale ) Limit.GrayScale = false
  if( !Limit.ColorScale ) Limit.ColorScale = false
  var LoopCheck = true , R , G , B , Range = ( Limit.Max - Limit.Min ) * .5  
  while( LoopCheck ){
    LoopCheck = false
    R = Random( Limit.Min , Limit.Max )
    G = Random( Limit.Min , Limit.Max )
    B = Random( Limit.Min , Limit.Max )
    if( Limit.GrayScale ) R = G = B = Random( Limit.Min , Limit.Max )
    if( Limit.ColorScale && Math.max( R , G , B ) - Math.min( R , G , B ) < Range ) LoopCheck = true
    }
  return 'rgb( ' + R + ' , ' + G + ' , ' + B + ' )'
  }
function RandomColor( Mode , Limit ){
  if( !Limit ) var Limit = {}
  var C = Mode == 'HSL' ? RandomColorHSL( Limit ) : RandomColorRGB( Limit )
  return C
  }
function RandomColorHSL( Limit ){
  var H , S , L
  if( !Limit ) var Limit = {}
  if( Limit.H != undefined ) H = typeof Limit.H != 'number' ? Random( Limit.H[ 0 ] , Limit.H[ 1 ] ) : Limit.H ; else H = Random( 1 , 360 )
  if( Limit.S != undefined ) S = typeof Limit.S != 'number' ? Random( Limit.S[ 0 ] , Limit.S[ 1 ] ) : Limit.S ; else S = Random( 0 , 100 )
  if( Limit.L != undefined ) L = typeof Limit.L != 'number' ? Random( Limit.L[ 0 ] , Limit.L[ 1 ] ) : Limit.L ; else L = Random( 0 , 100 )
  return 'hsl( ' + H + ' , ' + S + '% , ' + L + '% )'
  }
function removeChildNodes( element ){
  while( element.childNodes.length > 0 ) element.removeChild( element.firstChild )
  }
function removeChildren( element ){
  while( element.childElementCount > 0 ) element.removeChild( element.firstElementChild )
  }
function RotateItem( Canvas , Center , Angle , Main ){
  Canvas.translate( Center.X , Center.Y )
  Canvas.rotate( Angle * Math.PI / 180 )
  Canvas.translate( -Center.X , -Center.Y )
  Main()
  Canvas.translate( Center.X , Center.Y )
  Canvas.rotate( -Angle * Math.PI / 180 )
  Canvas.translate( -Center.X , -Center.Y )
  }
function rpn( string ){
  var array = string.split( /\s*|,/g )
  var stack = []
  var current
  if( array.length < 3 || array.last() == +array.last() ) throw 'Not Proper Postfix'
  while( current = array.shift() ){
    if( current == +current )
      stack.push( current )
    else{
      var n2 = stack.pop()
      var n1 = stack.pop()
      stack.push( eval( n1 + current + n2 ) )
      }
    }
  return stack.pop()
  }
function SpamClick( Count , X , Y ){
  var EV = document.createEvent( 'Events' )
    EV.initEvent( 'click' , true , false )
    EV.x = X
    EV.y = Y
  for( var i = 0 ; i < Count ; i++ ) window.dispatchEvent( EV )
  }
function TestParabola(){
  var M  = 2,
    P1 = {
      X  : 100,
      Y1 : 5,
      Y2 : 100
      }
    P2 = {
      X  : P1.X  * M,
      Y1 : P1.Y1 * M * M,
      Y2 : P1.Y2 * M * M
      }
    X  = C.X,
    Y  = C.Y,
    E  = ( ( M - 1 ) * ( M + 1 ) ) / 2 * ( P1.Y2 - P1.Y1 )

  C.E.beginPath()
  C.E.lineWidth = 5
  C.E.strokeStyle = '#00F'
  C.E.moveTo( X - P1.X , Y + P1.Y1 - E )
  C.E.quadraticCurveTo( X , Y - P1.Y2 - E , X + P1.X , Y + P1.Y1 - E )
  C.E.stroke()
  C.E.closePath()

  C.E.beginPath()
  C.E.lineWidth = 3
  C.E.strokeStyle = '#F00'
  C.E.moveTo( X - P2.X , Y + P2.Y1 )
  C.E.quadraticCurveTo( X , Y - P2.Y2 , X + P2.X , Y + P2.Y1 )
  C.E.stroke()
  C.E.closePath()
  }
function testRandom( min , max , tests ){
  var counter = {} , min = Math.R( min ) , max = Math.R( max )
  for( var i = min ; i <= max ; i++ ){
    counter[ i ] = 0
    }
  for( var i = 0 ; i < tests ; i++ ){
    var r = Random( min , max )
    counter[ r ]++
    }
  for( var i = min ; i <= max ; i++ ){
    var a = counter[ i ] / tests
    // var b = 1 / ( max - min + 1 )
    // var c = a - b
    var d = ( a * 100 )
    var e = d.toFixed( 2 )
    var f = e.padL( 6 )
    var g = max.toString().length
    cc( i.pad( g , ' ' ) + ': ' + f + '%' )
    }
  return counter
  }