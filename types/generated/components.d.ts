import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCardContactos extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_contactos';
  info: {
    displayName: 'card-contactos';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardServicios extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_servicios';
  info: {
    displayName: 'card-servicios';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'cta-button';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'third']>;
  };
}

export interface SharedDiferencialCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_diferencial_cards';
  info: {
    displayName: 'diferencial_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIncluyeServicios extends Struct.ComponentSchema {
  collectionName: 'components_shared_incluye_servicios';
  info: {
    displayName: 'incluye_servicios';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPreguntasFrecuentes extends Struct.ComponentSchema {
  collectionName: 'components_shared_preguntas_frecuentes';
  info: {
    displayName: 'preguntas-frecuentes';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProblemasServicios extends Struct.ComponentSchema {
  collectionName: 'components_shared_problemas_servicios';
  info: {
    displayName: 'problemas_servicios';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSolucionesServicios extends Struct.ComponentSchema {
  collectionName: 'components_shared_soluciones_servicios';
  info: {
    displayName: 'soluciones_servicios';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.card-contactos': SharedCardContactos;
      'shared.card-servicios': SharedCardServicios;
      'shared.cta-button': SharedCtaButton;
      'shared.diferencial-card': SharedDiferencialCard;
      'shared.incluye-servicios': SharedIncluyeServicios;
      'shared.media': SharedMedia;
      'shared.preguntas-frecuentes': SharedPreguntasFrecuentes;
      'shared.problemas-servicios': SharedProblemasServicios;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.soluciones-servicios': SharedSolucionesServicios;
    }
  }
}
