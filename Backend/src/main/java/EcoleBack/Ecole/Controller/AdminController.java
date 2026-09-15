package EcoleBack.Ecole.Controller;

import EcoleBack.Ecole.Entity.Administrateur;
import EcoleBack.Ecole.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Ecole/Admin")
public class AdminController {
    @Autowired
    AdminService adminService;
    @PostMapping("/save")
    public Administrateur save(@RequestBody Administrateur administrateur){
        return adminService.save(administrateur);
    }
    @GetMapping("/findAll")
    public List<Administrateur> findAll(){
        return adminService.findAll();
    }
    @GetMapping("/findOne")
    public Administrateur findOne(@RequestParam long id){
        return adminService.findOne(id);
    }
    @DeleteMapping("/delete")
    public String delete(@RequestParam long id){
        return adminService.delete(id);
    }
    @PostMapping("/update")
    public Administrateur update(@RequestBody Administrateur administrateur){
        return adminService.update(administrateur);
    }
    @PostMapping ("/login")
    public Administrateur login(@RequestBody  Administrateur administrateur){
        return adminService.login(administrateur);
    }
}
