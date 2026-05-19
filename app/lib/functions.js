export function blurBackground(refs,apply=true){
    const filter=apply?"blur(15px)":"none";
    refs.navpane.filter=filter;
    refs.navbar.filter=filter;
    refs.welcome.filter=filter;
    refs.showcase.filter=filter;
}
