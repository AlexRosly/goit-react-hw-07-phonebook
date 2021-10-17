import React, { useState } from "react";
import { FormSection, Forms, Input, Button, Label, Plus } from "./Form.styled";
import { useAddContactMutation } from "../../redux/contactSlice";
import { Loaders } from "../Loader/Loader";
import toast from "react-hot-toast";
import { Icon } from "../Icon/Icon";


export const Form = ({ data }) => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const setForm = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const searchName = data.map((d) => d.name).includes(name);
    if (searchName) {
      toast.error(`${name} is already in contacts`);
    } else {
      addContact({ name, number });
      toast.success(`${name}, Successfully created!`);
    }

    resetForm();
  };
  const resetForm = () => {
    setName('')
    setNumber('');
  };


  return (
    <FormSection>
      <Forms onSubmit={handelSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={setForm}
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={setForm}
            required
          />
        </Label>
        <Button type="submit" disabled={isLoading}> {isLoading && <Loaders />} <Plus size={Icon.small} /> Add contact</Button>
      </Forms>
    </FormSection>
  )
};

// class Form extends Component {
//   state = {
//     contacts: [],
//     name: "",
//     number: "",
//   };

  // setForm = (e) => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handelSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.resetForm();
  // };

//   resetForm = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <FormSection>
//         <Forms onSubmit={this.handelSubmit}>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               onChange={this.setForm}
//               required
//             />
//           </Label>
//           <Label>
//             Number
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               onChange={this.setForm}
//               required
//             />
//           </Label>
//           <Button type="submit">Add contact</Button>
//         </Forms>
//       </FormSection>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (contacts) => dispatch(phoneBookActions.addContact(contacts)),
// });

// export default connect(null, mapDispatchToProps)(Form);
// export default Form;