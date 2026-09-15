package EcoleBack.Ecole.Service;

import EcoleBack.Ecole.Entity.Administrateur;
import EcoleBack.Ecole.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;
    public Administrateur save(Administrateur administrateur){
        return adminRepository.saveAndFlush(administrateur);
    }
    public List<Administrateur> findAll(){
        return adminRepository.findAll();
    }
    public Administrateur findOne(long id){
        boolean exist= adminRepository.existsById(id);
        if (exist){
            return adminRepository.findById(id).orElse(new Administrateur());
        }
        System.out.println("Admin existe pas");
        return null;
    }
    public String delete(long id){
        boolean exist=adminRepository.existsById(id);
        if (exist){
            adminRepository.deleteById(id);
            return "Admin supprimer avec succes";
        }
        else {
            return "Admin existe pas";
        }
    }
    public Administrateur update(Administrateur administrateur){
       Optional<Administrateur> administrateur1=adminRepository.findById(administrateur.getId());
       if (administrateur1.isPresent()){
           Administrateur administrateur2=administrateur1.get();
           administrateur2.setNom(administrateur.getNom());
           administrateur2.setMotDePasse(administrateur.getMotDePasse());
           return adminRepository.saveAndFlush(administrateur2);
       }
       return null;
    }
    public Administrateur login(Administrateur admin){
        Administrateur administrateur=adminRepository.findByNom(admin.getNom());
        if (administrateur!=null && administrateur.getMotDePasse().equals(admin.getMotDePasse())){
            return administrateur;
        }
        return null;
    }
}
