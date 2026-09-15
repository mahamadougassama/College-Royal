package EcoleBack.Ecole.Controller;

import EcoleBack.Ecole.Entity.Actualite;
import EcoleBack.Ecole.Entity.Administrateur;
import EcoleBack.Ecole.Service.ActualiteService;
import EcoleBack.Ecole.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MultipartFilter;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Ecole/Actualite")
public class ActualiteController {
    @Autowired
    ActualiteService actualiteService;
    @PostMapping("/save")
    public Actualite save(@RequestParam String titre, @RequestParam String contenue, @RequestParam MultipartFile image,@RequestParam Long id){
        Actualite actualite=new Actualite();
        actualite.setTitre(titre);
        actualite.setContenue(contenue);
        actualite.setImage(image.getOriginalFilename());
        Administrateur administrateur=new Administrateur();
        administrateur.setId(id);
        actualite.setAdmin(administrateur);
        return actualiteService.save(actualite);
    }
    @GetMapping("/findAll")
    public List<Actualite> findAll(){
        return actualiteService.findAll();
    }
    @GetMapping("/findOne")
    public Actualite findOne(@RequestParam long id){
        return actualiteService.findOne(id);
    }
    @DeleteMapping("/delete")
    public String delete(@RequestParam long id){
        return actualiteService.delete(id);
    }
    @PostMapping("/update")
    public Actualite update(@RequestBody Actualite actualite){
        return actualiteService.update(actualite);
    }
}
