(function() {
    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      $("#name").text(profile.getName());
      $("#email").text(profile.getEmail());
      $("#image").attr('src', profile.getImageUrl());
      $(".user-data").css("display", "block");
      $(".g-signin").css("display", "none");
    }
  
    function onSignInFailure(error) {
      console.error('Google Sign-In failed:', error);
    }
  
    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        alert("You have been signed out successfully");
        $(".g-signin").css("display", "block");
        $(".user-data").css("display", "none");
      }).catch(function(error) {
        console.error('Sign-out error:', error);
      });
    }
  })();
  