import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { useState } from "react";

export default function SocialLogin() {
  const [profile, setProfile] = useState(null)

  return (
<> 
<div>
    <LoginSocialGoogle
      
      client_id={"462014511839-d99pvcerv5rsj7b1e03l8m0ref5t9j2t.apps.googleusercontent.com"}
    scope="opendid profile email"
    discoveryDocs="claims_supported"
    access_type="offline"
    onResolve={ ({
provider,data})=>{
console.log(provider,data)
}}
onReject={(err)=>{
console.log(err);
}}
    >
      <GoogleLoginButton />
    </LoginSocialGoogle>
 </div>
 <div> 
{ !profile ? (
  <LoginSocialFacebook
        appId="194657023404441"
        onResolve={(response) => {


          setProfile(response.data)
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook >  ):('') }

       </div>
       </>
  );
}
