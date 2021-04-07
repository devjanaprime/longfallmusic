const verbose = false;
let resizer = () => {
    if( verbose ) console.log( 'in resizer' );
    let w = window.innerWidth;
    let h = window.innerHeight;
    let l = document.getElementById( 'leftSide' );
    let r = document.getElementById( 'rightSide' );
    console.log( l.offsetHeight, h );
    if( l.offsetHeight < h ){
        console.log( 'less');
        if( !r.classList.contains( 'rightVertical' ) ){
            r.classList.add( 'rightVertical' );
        } //end add class
    } // end if
    else{
        console.log( 'more');
        if( r.classList.contains( 'rightVertical' ) ){
            r.classList.remove( 'rightVertical' );
        } // end remove class
    } // end else
}

window.onload = () =>{
    if( verbose ) console.log( 'in window.onload' );
    resizer();
}