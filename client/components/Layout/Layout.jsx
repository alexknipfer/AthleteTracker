Layout = React.createClass({
    mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  
   render(){
       return (
           <div>
           {(() => {
                if(this.data.currentUser){
                  return(
                    <header>
                        <Navigation />
                    </header>
                  );
                }
            })()}
            

            <main className="container">
                {this.props.content}
            </main>
           </div>
        );
   } 
});