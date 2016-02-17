Navigation = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  
   render(){
       if(this.data.currentUser){
          return (
          <AuthenticatedNav />
        );
       }
       
    else{
      return(
        <CommonNav />
        );
    }
       
   } 
});