import { Controller, Get, Param, Post, Render, Request, Res, UseFilters, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { AuthenticatedGuard } from "./guards/authenticated.guard";
import { AuthExceptionsFilter } from "./filter/auth-exceptions.filter";

@Controller()
@UseFilters(AuthExceptionsFilter)
export class AuthController {

  @Get("/register")
  @Render("register")
  getRegister() {
  }

  // @Post("/register")
  // async postRegister(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
  //   await this.usersService.create(createUserDto);
  //   res.redirect("/");
  // }

  @Get("/login")
  @Render("login")
  getLogin() {
  }

  @Post("login")
  postLogin(@Param("username") username: string, @Res() res: Response) {
    console.log(username);
    res.redirect("/");
  }

  @UseGuards(AuthenticatedGuard)
  @Get("/profile")
  @Render("profile")
  getProfile(@Request() req) {
    return { user: req.user };
  }

  @Get("/logout")
  logout(@Request() req, @Res() res: Response): void {
    req.logout();
    res.redirect("/");
  }

  /*
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
  */

}