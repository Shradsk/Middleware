

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('loan', {
    title: `Get Loan`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newLoan', {
    title: `Create New Loan`
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('signIn', {
    title: 'Sign in New Applicant'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getLoginUser = (req, res) => {
  const {email, password} = req.body;
  res.status(200).render('loginUser', {
    title: 'Log into your account'
  });
};

