package EcoleBack.Ecole.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Actualite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String contenue;
    private String image;
    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Administrateur admin;

    public Actualite() {
    }

    public Actualite(Long id, String titre, String contenue, String image, Administrateur admin) {
        this.id = id;
        this.titre = titre;
        this.contenue = contenue;
        this.image = image;

        this.admin = admin;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getContenue() {
        return contenue;
    }

    public void setContenue(String contenue) {
        this.contenue = contenue;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
    public Administrateur getAdmin() {
        return admin;
    }

    public void setAdmin(Administrateur admin) {
        this.admin = admin;
    }
}
