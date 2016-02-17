Layout = React.createClass({
   render(){
       return (
           <div>
            <header>
                <Navigation />
            </header>

            <main className="container">
                {this.props.content}
            </main>
           </div>
        );
   } 
});