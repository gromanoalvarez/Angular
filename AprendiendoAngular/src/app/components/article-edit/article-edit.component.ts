import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html', //uso la misma vista que cuando creo un nuevo articulo
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService],
})
export class ArticleEditComponent implements OnInit {
  public article!: Article;
  public status!: string;
  public isEdit: boolean;
  public pageTitle: string;
  public url: string;

  // Configura la libreria https://www.npmjs.com/package/angular-file-uploader
  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    uploadAPI: {
      // la url de la imgen utiliza router.post('/upload-image/:id?', md_upload, ArticleController.upload); //utilizo middleware multipart para form-data
      url: Global.url + 'upload-image/',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit',
    },
  };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, '');
    this.isEdit = true;
    this.pageTitle = 'Editar artículo';
    this.url= Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    //con el servicio utilizo mi metodo UPDATE que desarrolle dentro del mismo servicio
    //con subscribe() para recoger el observable
    this._articleService.update(this.article._id, this.article).subscribe({
      //si hay respuesta positiva
      next: (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          //Alerta con https://sweetalert.js.org/guides/
          swal(
            'Artículo editado',
            'El artículo se ha editado correctamente',
            'success'
          );

          //PARA HACER LA REDIRECCION debo importar Router y activatedroute y iniciarlos en constructor
          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      }, // si hay errores
      error: (error) => {
        console.log(error);
        this.status = 'error';
          //Alerta con https://sweetalert.js.org/guides/
          swal(
            'Falla en la edición',
            'El artículo no se ha editado',
            'error'
          );
      },
    });
  }

  imageUpload(data: any) {
    this.article.image = data.body.image;
  }

  //Para VER EL CONTENIDO DEL ARTICULO A EDITAR:
  getArticle() {
    //CAPTURO EL ID DE LA URL
    this._route.params.subscribe((params) => {
      let id = params['id'];

      //DAME EL ARTICULO QUE TIENE MISMA ID EN LA BASE DE DATOS
      this._articleService.getArticle(id).subscribe({
        next: (response) => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error: (error) => {
          this._router.navigate(['/home']);
        },
      });
    });
  }

}
