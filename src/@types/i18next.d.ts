import "i18next"
import ns1 from "../i18n/locales/en/translation.json"

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: 'translation'
        resources: {
            ns1: typeof ns1
        }
    }
}