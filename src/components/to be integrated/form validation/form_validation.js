// first install vuelidate --> npm install vuelidate --save

// then into main.js add: 
import Vuelidate from 'vuelidate' 
Vue.use(Vuelidate)

// in the form component add in script tag accordingly to your needs
import { required, email, minLength, between, sameAs, ... } from "vuelidate/lib/validators";
// then add validations to the component vue instance as in this example:
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormComponent",

  data() {
    return {
      form: {
        name: "",
        email: "",
        age: 0
      }
    };
  },

  validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email },
      age: { between: between(20, 30) }
    }
  },

}

// you can add your own validators.js file in which you make specific validators as in this example
import { required, email } from "vuelidate/lib/validators";
import { isNameJoe, notGmail, isEmailAvailable } from "@/validators";

export default {
    name: "FormComponent",
  
    components: { NameComponent, EmailComponent },
  
    data() {
      return {
        form: {
          name: "",
          email: ""
        }
      };
    },
  
    validations: {
      form: {
        name: { required, isJoe: isNameJoe },
        email: { required, email, notGmail, isEmailAvailable }
      }
    },
}  

// where validators.js contains
  export function isNameJoe(value) {
    if (!value) return true;
    return value === "Joe";
  }
  
  export function notGmail(value = "") {
    return !value.includes("gmail");
  }
  
  export function isEmailAvailable(value) {
    if (value === "") return true;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value.length > 10);
      }, 500);
    });
  }