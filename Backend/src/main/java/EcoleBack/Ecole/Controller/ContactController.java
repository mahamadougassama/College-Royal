package EcoleBack.Ecole.Controller;

import EcoleBack.Ecole.Entity.Contact;
import EcoleBack.Ecole.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Ecole/Contact")
public class ContactController {
    @Autowired
    ContactService contactService;
    @PostMapping("/save")
    public Contact save(@RequestBody Contact contact){
        return contactService.save(contact);
    }
    @GetMapping("/findAll")
    public List<Contact> findAll(){
        return contactService.findAll();
    }
    @GetMapping("/findOne")
    public Contact findOne(@RequestParam long id){
        return contactService.findOne(id);
    }
    @DeleteMapping("/delete")
    public String delete(@RequestParam long id){
        return contactService.delete(id);
    }
    @PostMapping("/update")
    public Contact update(@RequestBody Contact contact){
        return contactService.update(contact);
    }
}
