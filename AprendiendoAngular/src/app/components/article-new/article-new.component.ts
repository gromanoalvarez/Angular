import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import { ArticleEditComponent } from '../article-edit/article-edit.component';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService],
})
export class ArticleNewComponent implements OnInit {
  public article!: Article;
  public status!: string;
  public pageTitle : string;
  public url: string;
  public isEdit :boolean;


  // Configura la libreria https://www.npmjs.com/package/angular-file-uploader
  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    uploadAPI: {
      // la url de la imgen utiliza router.post('/upload-image/:id?', md_upload, ArticleController.upload); //utilizo middleware multipart para form-data
      url: Global.url + 'upload-image/'
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
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, '');
    this.pageTitle = 'Crear artículo';
    this.isEdit = false;
    this.url = Global.url;
  }
  //   me baso en :
  //export class Article{
  //     constructor(
  //         public _id: string,
  //         public title: string,
  //         public content: string,
  //         public date: any,
  //         public image: string
  //         ){
  //     }
  // }

  ngOnInit(): void {
  }

  onSubmit() {
    //con el servicio utilizo mi metodo create que desarrolle dentro del mismo servicio
    //con subscribe() para recoger el observable
    this._articleService.create(this.article).subscribe({
      //si hay respuesta positiva
      next: (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          //PARA HACER LA REDIRECCION debo importar Router y activatedroute y iniciarlos en constructor
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      }, // si hay errores
      error: (error) => {
        console.log(error);
        this.status = 'error';
      },
    });
  }

  imageUpload(data:any){
    this.article.image=data.body.image;
  }



}
