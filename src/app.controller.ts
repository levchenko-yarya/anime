import { Controller, Get, Post, Request, Res, Render, UseGuards, UseFilters } from "@nestjs/common";
import { Response } from "express";
import { LoginGuard } from "./auth/guards/login.guard";
import { AuthenticatedGuard } from "./auth/guards/authenticated.guard";
import { AuthExceptionsFilter } from "./auth/filter/auth-exceptions.filter";

@Controller()
@UseFilters(AuthExceptionsFilter)
export class AppController {

  @Get("/")
  @Render("login")
  index(@Request() req): { message: string } {
    return { message: req.flash("loginError") };
  }

  @UseGuards(LoginGuard)
  @Post("login")
  login(@Res() res: Response): void {
    res.redirect("/home");
  }

  @UseGuards(AuthenticatedGuard)
  @Get("home")
  @Render("home")
  getHome(@Request() req) {
    return { user: req.user };
  }

  @UseGuards(AuthenticatedGuard)
  @Get("profile")
  @Render("profile")
  getProfile(@Request() req) {
    return { user: req.user };
  }

  @Get("/logout")
  logout(@Request() req, @Res() res: Response): void {
    req.logout();
    res.redirect("/");
  }
}
