import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('leads')
  async postLead() {
    let {token, domain} = await this.appService.getTokenAndDomain()

    let req = await fetch(`https://${domain}/api/v4/leads`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify([{name: 'name'}])
    })
    let data = await req.json()
    return data._embedded.leads[0].id
  }

  @Post('contacts') 
  async postContact() {
    let {token, domain} = await this.appService.getTokenAndDomain()

    let req = await fetch(`https://${domain}/api/v4/contacts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify([{name: 'name'}])
    })
    let data = await req.json()
    return data._embedded.contacts[0].id
  }

  @Post('companies') 
  async postCompany() {
    let {token, domain} = await this.appService.getTokenAndDomain()

    let req = await fetch(`https://${domain}/api/v4/companies`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify([{name: 'name'}])
    })
    let data = await req.json()
    return data._embedded.companies[0].id
  }
}
