export default function Layout({ children }){
    return(
    <div
        css={{
        maxW: "100%"
        }}
    >
        {children}
    </div>
    );
}