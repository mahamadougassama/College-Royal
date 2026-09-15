package EcoleBack.Ecole.Service;

import EcoleBack.Ecole.Entity.Contact;
import EcoleBack.Ecole.Repository.AdminRepository;
import EcoleBack.Ecole.Repository.ContactRpository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    @Autowired
    ContactRpository contactRpository;
    @Autowired
    AdminRepository adminRepository;
    public Contact save(Contact contact){
        return contactRpository.saveAndFlush(contact);
    }
    public List<Contact> findAll(){
        return contactRpository.findAll();
    }
    public Contact findOne(long id){
        boolean exist= contactRpository.existsById(id);
        if (exist){
            return contactRpository.findById(id).orElse(new Contact());
        }
        return null;
    }
    public String delete(long id){
        boolean exist= contactRpository.existsById(id);
        if (exist){
            contactRpository.deleteById(id);
            return "Supprimer";
        }
        return "Existe pas";
    }
    public Contact update(Contact contact){
       Optional<Contact> ancien=contactRpository.findById(contact.getId());
       if (ancien.isPresent()){
           Contact nouveau=ancien.get();
           nouveau.setEmail(contact.getEmail());
           nouveau.setNom(contact.getNom());
           nouveau.setMessage(contact.getMessage());
       }
       return null;
    }
}
