package EcoleBack.Ecole.Service;

import EcoleBack.Ecole.Entity.Actualite;
import EcoleBack.Ecole.Entity.Administrateur;
import EcoleBack.Ecole.Repository.ActualiteRepository;
import EcoleBack.Ecole.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActualiteService {
    @Autowired
    private ActualiteRepository actualiteRepository;
    @Autowired
    private AdminRepository adminRepository;
    public Actualite save(Actualite actualite){
        Optional<Administrateur> administrateur=adminRepository.findById(actualite.getAdmin().getId());
        if (administrateur.isPresent()){
            actualite.setAdmin(administrateur.get());
            return actualiteRepository.saveAndFlush(actualite);
        }
        return null;
    }
    public List<Actualite> findAll(){
        return actualiteRepository.findAll();
    }
    public Actualite findOne(long id){
        boolean exist= actualiteRepository.existsById(id);
        if (exist){
            return actualiteRepository.findById(id).orElse(new Actualite());
        }
        else {
            return null;
        }
    }
    public String delete(long id){
        boolean exist= actualiteRepository.existsById(id);
        if (exist){
            actualiteRepository.deleteById(id);
            return "Supprimer";
        }
        return "Existe pas";
    }
    public Actualite update(Actualite actualite){
        Optional<Actualite> chercher=actualiteRepository.findById(actualite.getId());
        if (chercher.isPresent()){
            Actualite nouveau=chercher.get();
            nouveau.setContenue(actualite.getContenue());
            nouveau.setImage(actualite.getImage());
            nouveau.setTitre(actualite.getTitre());
            return actualiteRepository.saveAndFlush(nouveau);
        }
        return null;
    }
}
