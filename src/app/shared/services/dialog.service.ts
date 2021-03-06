import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { TranslateService } from '@ngx-translate/core'

import { SimpleDialogComponent } from '@shared/components/simple-dialog/simple-dialog.component'
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component'
import { HeaderContent } from '@shared/models'

@Injectable()
export class DialogService {
  private readonly WIDTH = '500px'
  constructor (
    private readonly dialog: MatDialog,
    private readonly translateService: TranslateService
  ) {}

  openConfirmDialog (
    header: string,
    content: string
  ): MatDialogRef<ConfirmDialogComponent> {
    const data: HeaderContent = { header, content }
    return this.dialog.open(ConfirmDialogComponent, {
      data,
      width: this.WIDTH
    })
  }

  openSimpleDialog (
    header: string,
    content: string
  ): MatDialogRef<SimpleDialogComponent> {
    const data: HeaderContent = { header, content }
    return this.dialog.open(SimpleDialogComponent, {
      data,
      width: this.WIDTH
    })
  }

  showLogoutDialog (username: string): void {
    this.openSimpleDialog(
      this.translateService.instant('shared.loggedOut'),
      `${this.translateService.instant('shared.bye')}, ${username}.`
    )
      .afterClosed()
      .subscribe()
  }
}
