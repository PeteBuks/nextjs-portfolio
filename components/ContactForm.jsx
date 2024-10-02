import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"


const ContactForm = () => {

    //Handle event
    async function handleSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target)
        try {
  
            //fetch api
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };


  return (
    <div className="xl:h-[54%] order-2 xl:order-none">

        {/* form */}
        <form className=" flex flex-col gap-6 p-5 frosty_glass" onSubmit={handleSubmit}>
            <h3 className="text-3xl purple_gradient">Lets Work Together</h3>
            <p className="text-tertiary">
                It would be delightful if we could work together. I am looking forward to hearing from you.
            </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fullName" placeholder="FirstName" name="fullname" required/>
                <Input type="email" placeholder="Email Address" name="email" required/>
                <Input type="subject" placeholder="Subject" name="subject" required/>
                <Input type="phone" placeholder="Phone no" name="phone" required/>
            </div>
            <Textarea className="h-[200px]" placeholder="Type your message here" name="message" required/>
            <Button size="md" className="max-w-20">
                Send
            </Button>
        </form>
    </div>
)
};

export default ContactForm;
