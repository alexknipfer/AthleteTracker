if (Accounts._resetPasswordToken) {
  Session.set('reset-password', Accounts._resetPasswordToken);
  FlowRouter.go('/reset-password' + Session.get('reset-password'));
}
