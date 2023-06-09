import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';


import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CanvasComponent } from './canvas/canvas.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { CtaComponent } from './cta/cta.component';
import { ServicesidebarComponent } from './servicesidebar/servicesidebar.component';
import { BlogsidebarComponent } from './blogsidebar/blogsidebar.component';
import { RelatedpostComponent } from './relatedpost/relatedpost.component';
import { ShopsidebarComponent } from './shopsidebar/shopsidebar.component';
import { RelatedshopComponent } from './relatedshop/relatedshop.component';
import { FootergifComponent } from './footergif/footergif.component';



@NgModule({
  declarations: [HeaderOneComponent, HeaderTwoComponent, HeaderThreeComponent, BreadcrumbComponent, CanvasComponent, FooterComponent, BrandsComponent, CtaComponent, ServicesidebarComponent, BlogsidebarComponent, RelatedpostComponent, ShopsidebarComponent, RelatedshopComponent, FootergifComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    SlickCarouselModule,
    FormsModule
  ],
  exports: [HeaderOneComponent, HeaderTwoComponent, HeaderThreeComponent, BreadcrumbComponent, FooterComponent, BrandsComponent, CtaComponent, ServicesidebarComponent, BlogsidebarComponent, RelatedpostComponent, ShopsidebarComponent, RelatedshopComponent, FootergifComponent]
})
export class SharedModule { }
