import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getTokenAndDomain() {
    let data = await fetch('https://test.gnzs.ru/oauth/get-token.php', {
      headers: {
        'X-Client-Id': '31550986',
      }
    })
    let dataObj = await data.json()
    let token = dataObj.access_token
    let domain = dataObj.base_domain
    return {token, domain}
  }
}

